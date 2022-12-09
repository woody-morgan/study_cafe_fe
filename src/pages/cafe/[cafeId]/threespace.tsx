import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import { House, Player } from '@src/utils/three';
import gsap from 'gsap';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { socketConfig } from '@src/core/config/envConfig.js';
import useSocketIo from '@src/hooks/media/useSocketIO';
import { usePeerClient, useUserMedia } from '@src/hooks/media';
import useRemoteStreams from '@src/hooks/media/useRemoteStream';
import { ToastError } from '@src/utils/toast';
import dynamic from 'next/dynamic';
import { UserVoiceView } from '@src/components/ui/molecule';
import { useSetRecoilState } from 'recoil';
import { openTodolistModal, openTodolistShowModal } from '@src/atom/modal';
import { IconButton } from '@src/components/ui/atom';

interface Props {
  cafeId: string;
}

export const getServerSideProps = async (ctx) => {
  const cafeId = ctx.query.cafeId;

  return {
    props: {
      cafeId,
    },
  };
};

const CafeGame: NextPage<Props> = ({ cafeId }) => {
  const router = useRouter();
  const _openTodolistModal = useSetRecoilState(openTodolistModal);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const myPeerIdRef = useRef<string>(null);
  const otherPlayersRef = useRef<Player[]>([]);
  const gltfLoaderRef = useRef<GLTFLoader>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    _openTodolistModal({
      fullScreen: false,
    });
  }, []);

  const onNewPeer = useCallback((peerId: string) => {
    const otherPlayer = new Player({
      id: peerId,
      scene: sceneRef.current,
      meshes: meshesRef.current,
      gltfLoader: gltfLoaderRef.current,
      modelSrc: '/models/ilbuni.glb',
    });
    otherPlayersRef.current.push(otherPlayer);
  }, []);

  const onRemovePeer = useCallback((peerId: string) => {
    const otherPlayer = otherPlayersRef.current.find((player) => player.id === peerId);
    if (otherPlayer) {
      otherPlayer.dispose();
      otherPlayersRef.current = otherPlayersRef.current.filter(
        (player) => player.id !== otherPlayer.id
      );
      console.log('otherPlayersRef.current', otherPlayersRef.current);
    }
  }, []);

  const [
    socket,
    initSocket,
    disconnected,
    sendSocketMessage,
    recvSocketMessage,
    sendCoordinate,
    recvCoordinate,
    sendJoinMessage,
    recvJoinMessage,
    recvLeaveMessage,
    recvErrorMessage,
    disconnectSocket,
  ] = useSocketIo(socketConfig.url + cafeId);

  // Init peerclient with usermedia
  const localStream = useUserMedia();
  const [remoteStreams, addRemoteStream, removeRemoteStream] = useRemoteStreams();
  usePeerClient({
    myPeerIdRef,
    localStream,
    addRemoteStream,
    removeRemoteStream,
    sendJoinMessage,
    recvJoinMessage,
    recvLeaveMessage,
    recvErrorMessage,
    disconnectSocket,
    onNewPeer,
    onRemovePeer,
  });

  const sendMyPostXZ = (x, z) => {
    sendCoordinate({
      clientId: myPeerIdRef.current,
      x,
      z,
    });
  };
  // message send & recv handler
  useEffect(() => {
    if (disconnected) {
      ToastError('서버와 연결이 끊어졌습니다.');
      router.push(`/cafe/${cafeId}`);
      return;
    }
    initSocket();
    recvCoordinate((payload) => {
      const { clientId, x, z } = payload;
      const otherPlayer = otherPlayersRef.current.find((player) => player.id === clientId);
      if (otherPlayer) {
        otherPlayer.setDestinationPoint(x, z);
      }
    });
    return () => {
      disconnectSocket();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disconnected]);

  useEffect(() => {
    router.replace(`/cafe/${cafeId}/threespace`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (otherPlayersRef.current.length > 0) {
  //       otherPlayersRef.current.forEach((otherPlayer) => {
  //         const getRandomPoint = Math.floor(Math.random() * sampleMovePoints.length);
  //         const randomPoint = sampleMovePoints[getRandomPoint];
  //         otherPlayer.setDestinationPoint(randomPoint.x, randomPoint.z);
  //       });
  //     }
  //   }, 10000);
  // }, []);

  useEffect(() => {
    if (canvasRef.current) {
      document.body.style.overflow = 'hidden';
      // Texture
      const textureLoader = new THREE.TextureLoader();
      const floorTexture = textureLoader.load('/static/grid.png');
      floorTexture.wrapS = THREE.RepeatWrapping;
      floorTexture.wrapT = THREE.RepeatWrapping;
      floorTexture.repeat.x = 10;
      floorTexture.repeat.y = 10;

      // Renderer
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // Scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.OrthographicCamera(
        -(window.innerWidth / window.innerHeight), // left
        window.innerWidth / window.innerHeight, // right,
        1, // top
        -1, // bottom
        -1000,
        1000
      );

      const cameraPosition = new THREE.Vector3(1, 5, 5);
      camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
      camera.zoom = 0.16;
      camera.updateProjectionMatrix();
      scene.add(camera);

      // Light
      const ambientLight = new THREE.AmbientLight('white', 0.7);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight('white', 0.5);
      const directionalLightOriginPosition = new THREE.Vector3(1, 1, 1);
      directionalLight.position.x = directionalLightOriginPosition.x;
      directionalLight.position.y = directionalLightOriginPosition.y;
      directionalLight.position.z = directionalLightOriginPosition.z;
      directionalLight.castShadow = true;

      // mapSize 세팅으로 그림자 퀄리티 설정
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      // 그림자 범위
      directionalLight.shadow.camera.left = -100;
      directionalLight.shadow.camera.right = 100;
      directionalLight.shadow.camera.top = 100;
      directionalLight.shadow.camera.bottom = -100;
      directionalLight.shadow.camera.near = -100;
      directionalLight.shadow.camera.far = 100;
      scene.add(directionalLight);

      // Mesh
      const meshes = [];
      meshesRef.current = meshes;
      const floorMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100),
        new THREE.MeshStandardMaterial({
          map: floorTexture,
        })
      );
      floorMesh.name = 'floor';
      floorMesh.rotation.x = -Math.PI / 2;
      floorMesh.receiveShadow = true;
      scene.add(floorMesh);
      meshes.push(floorMesh);

      const pointerMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshBasicMaterial({
          color: 'crimson',
          transparent: true,
          opacity: 0.5,
        })
      );
      pointerMesh.rotation.x = -Math.PI / 2;
      pointerMesh.position.y = 0.01;
      pointerMesh.receiveShadow = true;
      scene.add(pointerMesh);

      const spotMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 3),
        new THREE.MeshStandardMaterial({
          color: 'yellow',
          transparent: true,
          opacity: 0.5,
        })
      );
      spotMesh.position.set(5, 0.005, 5);
      spotMesh.rotation.x = -Math.PI / 2;
      spotMesh.receiveShadow = true;
      scene.add(spotMesh);

      const gltfLoader = new GLTFLoader();
      gltfLoaderRef.current = gltfLoader;

      const house = new House({
        gltfLoader,
        scene,
        modelSrc: '/models/house.glb',
        x: 5,
        y: -1.3,
        z: 2,
      });

      const player = new Player({
        id: socket.id,
        scene,
        meshes,
        gltfLoader: gltfLoaderRef.current,
        modelSrc: '/models/ilbuni.glb',
      });

      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      let isPressed = false; // 마우스를 누르고 있는 상태
      const clock = new THREE.Clock();

      function draw() {
        const delta = clock.getDelta();

        if (otherPlayersRef.current.length > 0) {
          otherPlayersRef.current.forEach((otherPlayer) => {
            if (otherPlayer.mixer) otherPlayer.mixer.update(delta);
          });
        }

        if (player.mixer) player.mixer.update(delta);

        if (player.modelMesh) {
          camera.lookAt(player.modelMesh.position);
        }

        if (otherPlayersRef.current.length > 0) {
          otherPlayersRef.current.forEach((otherPlayer) => {
            if (otherPlayer.moving) {
              otherPlayer.move();
            } else {
              otherPlayer.stop();
            }
          });
        }

        if (player.modelMesh) {
          if (isPressed) {
            raycasting();
          }

          if (player.moving) {
            // 걸어가는 상태
            player.move();

            camera.position.x = cameraPosition.x + player.modelMesh.position.x;
            camera.position.z = cameraPosition.z + player.modelMesh.position.z;

            if (
              Math.abs(spotMesh.position.x - player.modelMesh.position.x) < 1.5 &&
              Math.abs(spotMesh.position.z - player.modelMesh.position.z) < 1.5
            ) {
              if (!house.visible) {
                console.log('나와');
                house.visible = true;
                spotMesh.material.color.set('seagreen');
                gsap.to(house.modelMesh.position, {
                  duration: 1,
                  y: 1,
                  ease: 'Bounce.easeOut',
                });
                gsap.to(camera.position, {
                  duration: 1,
                  y: 3,
                });
              }
            } else if (house.visible) {
              console.log('들어가');
              house.visible = false;
              spotMesh.material.color.set('yellow');
              gsap.to(house.modelMesh.position, {
                duration: 0.5,
                y: -1.3,
              });
              gsap.to(camera.position, {
                duration: 1,
                y: 5,
              });
            }
          } else {
            // 서 있는 상태
            player.stop();
          }
        }

        renderer.render(scene, camera);
        renderer.setAnimationLoop(draw);
      }

      function checkIntersects() {
        // raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(meshes);
        for (const item of intersects) {
          if (item.object.name === 'floor') {
            player.setDestinationPoint(item.point.x, item.point.z);

            // send this point to other players
            sendMyPostXZ(item.point.x, item.point.z);

            pointerMesh.position.x = player.destinationPoint.x;
            pointerMesh.position.z = player.destinationPoint.z;
          }
          break;
        }
      }

      function setSize() {
        camera.left = -(window.innerWidth / window.innerHeight);
        camera.right = window.innerWidth / window.innerHeight;
        camera.top = 1;
        camera.bottom = -1;

        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
      }

      window.addEventListener('resize', setSize);

      // 마우스 좌표를 three.js에 맞게 변환
      function calculateMousePosition(e) {
        mouse.x = (e.clientX / canvas.clientWidth) * 2 - 1;
        mouse.y = -((e.clientY / canvas.clientHeight) * 2 - 1);
      }

      // 변환된 마우스 좌표를 이용해 래이캐스팅
      function raycasting() {
        raycaster.setFromCamera(mouse, camera);
        checkIntersects();
      }

      // Mouse Event
      canvas.addEventListener('mousedown', (e) => {
        isPressed = true;
        calculateMousePosition(e);
      });
      canvas.addEventListener('mouseup', () => {
        isPressed = false;
      });
      canvas.addEventListener('mousemove', (e) => {
        if (isPressed) {
          calculateMousePosition(e);
        }
      });

      // Touch Event
      canvas.addEventListener('touchstart', (e) => {
        isPressed = true;
        calculateMousePosition(e.touches[0]);
      });
      canvas.addEventListener('touchend', () => {
        isPressed = false;
      });
      canvas.addEventListener('touchmove', (e) => {
        if (isPressed) {
          calculateMousePosition(e.touches[0]);
        }
      });

      draw();

      return () => {
        // prevent scroll
        document.body.style.overflow = 'auto';
        window.removeEventListener('resize', setSize);
        canvas.removeEventListener('mousedown', (e) => {
          isPressed = true;
          calculateMousePosition(e);
        });
        canvas.removeEventListener('mouseup', () => {
          isPressed = false;
        });
        canvas.removeEventListener('mousemove', (e) => {
          if (isPressed) {
            calculateMousePosition(e);
          }
        });
        canvas.removeEventListener('touchstart', (e) => {
          isPressed = true;
          calculateMousePosition(e.touches[0]);
        });
        canvas.removeEventListener('touchend', () => {
          isPressed = false;
        });
        canvas.removeEventListener('touchmove', (e) => {
          if (isPressed) {
            calculateMousePosition(e.touches[0]);
          }
        });
      };
    }
  }, []);

  const _openTodoListShowModal = useSetRecoilState(openTodolistShowModal);

  return (
    <Fragment>
      <canvas ref={canvasRef} className="fixed left-0 top-0" />
      <div className="invisible">
        <UserVoiceView localStream={localStream} remoteStreams={remoteStreams} />
      </div>
      <div className="fixed top-4 right-4">
        <IconButton
          className="text-white"
          name="logo"
          size={36}
          onClick={() => {
            _openTodoListShowModal({
              fullScreen: false,
            });
          }}
        />
      </div>
      {/* <GameController /> */}
    </Fragment>
  );
};

export default dynamic(() => Promise.resolve(CafeGame), { ssr: false });
