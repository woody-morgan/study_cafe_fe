import { AnimationMixer, Vector3 } from 'three';

export default class Player {
  constructor(info) {
    this.moving = false;
    this.destinationPoint = new Vector3();
    this.angle = 0;

    info.gltfLoader.load(info.modelSrc, (glb) => {
      glb.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });

      this.modelMesh = glb.scene.children[0];
      this.modelMesh.position.y = 0.3;
      this.modelMesh.name = 'ilbuni';
      info.scene.add(this.modelMesh);
      info.meshes.push(this.modelMesh);

      this.actions = [];

      this.mixer = new AnimationMixer(this.modelMesh);
      this.actions[0] = this.mixer.clipAction(glb.animations[0]);
      this.actions[1] = this.mixer.clipAction(glb.animations[1]);
      this.actions[0].play();
    });
  }

  getAngle() {
    return Math.atan2(
      this.destinationPoint.z - this.modelMesh.position.z,
      this.destinationPoint.x - this.modelMesh.position.x
    );
  }

  setDestinationPoint(x, z) {
    this.moving = true;
    this.destinationPoint.set(x, 0.3, z);
    this.modelMesh.lookAt(this.destinationPoint);
  }

  move() {
    this.angle = this.getAngle();
    this.modelMesh.position.x += Math.cos(this.angle) * 0.05;
    this.modelMesh.position.z += Math.sin(this.angle) * 0.05;

    this.actions[0].stop();
    this.actions[1].play();

    if (
      Math.abs(this.destinationPoint.x - this.modelMesh.position.x) < 0.03 &&
      Math.abs(this.destinationPoint.z - this.modelMesh.position.z) < 0.03
    ) {
      this.moving = false;
    }
  }

  stop() {
    if (this.actions) {
      this.actions[1].stop();
      this.actions[0].play();
    }
  }
}
