import { SocketJoinReceivePayloadType } from '@src/core/interface/message';
import { AddRemoteStreamType, RemoveRemoteStreamType } from '@src/hooks/media/useRemoteStream';
import Peer from 'peerjs';
import { useEffect, useRef } from 'react';

export type PeerClientHookProps = {
  myPeerIdRef: React.MutableRefObject<string>;
  localStream: MediaStream;
  addRemoteStream: AddRemoteStreamType;
  removeRemoteStream: RemoveRemoteStreamType;
  sendJoinMessage: (peerId: string) => void;
  recvJoinMessage: (callback: ({ peerId }: SocketJoinReceivePayloadType) => void) => void;
  recvLeaveMessage: (callback: ({ peerId }: SocketJoinReceivePayloadType) => void) => void;
  recvErrorMessage: (callback: (error: string) => void) => void;
  disconnectSocket: () => void;
  onNewPeer: (peerId: string) => void;
  onRemovePeer: (peerId: string) => void;
};

function usePeerClient({
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
}: PeerClientHookProps) {
  const peerRef = useRef<Peer>(null);

  // cleanup peer connection
  const cleanupPeerConnection = () => {
    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }
  };

  const initPeerConnection = (peerObj: Peer) => {
    peerObj.on('open', () => {
      peerRef.current = peerObj;
      myPeerIdRef.current = peerObj.id;
      sendJoinMessage(peerObj.id);
    });
  };

  const callFromPeer = (peerObj: Peer) => {
    peerObj.on('call', (call) => {
      // const {username, profile} = call.metadata;
      // answer call
      call.answer(localStream);
      // add remote stream
      call.on('stream', (stream) => {
        addRemoteStream({
          peerId: call.peer,
          stream,
        });
        onNewPeer(call.peer);
      });
      // close call
      call.on('close', () => {
        removeRemoteStream(call.peer);
        onRemovePeer(call.peer);
      });
      // error call
      call.on('error', (err) => {
        removeRemoteStream(call.peer);
        onRemovePeer(call.peer);
      });
    });
  };

  const callToPeer = (peerObj: Peer) => {
    recvJoinMessage(({ peerId }) => {
      const call = peerObj.call(peerId, localStream);
      // add remote stream
      call.on('stream', (remoteStream) => {
        console.log('add remote stream');
        addRemoteStream({
          peerId,
          stream: remoteStream,
        });
        onNewPeer(peerId);
      });
      // remove stream when close
      call.on('close', () => {
        removeRemoteStream(peerId);
        onRemovePeer(peerId);
        call.close();
      });
      // remove stream when error
      call.on('error', () => {
        removeRemoteStream(peerId);
        onRemovePeer(peerId);
        call.close();
      });
    });
  };

  const disconnectFromPeerServer = (peerObj: Peer) => {
    // if get error from peer server(ex. over max connection), disconnect from peer server
    recvErrorMessage((error) => {
      cleanupPeerConnection();
      disconnectSocket();
    });
    peerObj.on('disconnected', () => {
      cleanupPeerConnection();
      disconnectSocket();
    });
    peerObj.on('close', () => {
      cleanupPeerConnection();
      disconnectSocket();
    });
    peerObj.on('error', () => {
      cleanupPeerConnection();
      disconnectSocket();
    });
  };

  const someOneLeave = () => {
    recvLeaveMessage(({ peerId }) => {
      removeRemoteStream(peerId);
      onRemovePeer(peerId);
    });
  };

  const handlePeerConnection = (peerObj: Peer) => {
    initPeerConnection(peerObj);
    callFromPeer(peerObj);
    callToPeer(peerObj);
    disconnectFromPeerServer(peerObj);
    someOneLeave();
  };

  useEffect(() => {
    if (localStream) {
      import('peerjs').then(({ default: Peer }) => {
        const peerObj = new Peer();
        handlePeerConnection(peerObj);
      });
    }

    return () => {
      cleanupPeerConnection();
    };
  }, [localStream]);
}

export default usePeerClient;
