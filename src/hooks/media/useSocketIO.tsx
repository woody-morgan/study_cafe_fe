import {
  SocketCoordinatePayloadType,
  SocketJoinReceivePayloadType,
  SocketMessagePayloadType,
} from '@src/core/interface/message';
import { useCallback, useMemo, useState } from 'react';
import { io } from 'socket.io-client';

export default function useSocketIo(url: string) {
  const [disconnected, setDisconnected] = useState(false);
  const socket = useMemo(() => io(url, { transports: ['websocket'] }), [url]);

  const initSocket = useCallback(() => {
    if (socket) return;
    socket.connect();
    setDisconnected(false);
  }, [socket]);

  const sendSocketMessage = useCallback(
    ({ name, text }: SocketMessagePayloadType) => {
      if (socket == null || socket.connected == false) {
        initSocket();
      }
      socket.emit('message', {
        name,
        text,
      });
    },
    [initSocket, socket]
  );

  const recvSocketMessage = useCallback(
    (callback: (message: SocketMessagePayloadType) => void) => {
      if (socket == null || socket.connected == false) {
        initSocket();
      }
      socket.on('msgToClient', callback);
    },
    [initSocket, socket]
  );

  const sendCoordinate = useCallback(
    (payload: SocketCoordinatePayloadType) => {
      if (socket == null || socket.connected == false) {
        initSocket();
      }
      socket.emit('coordinate', payload);
    },
    [initSocket, socket]
  );

  const recvCoordinate = useCallback(
    (callback: (payload: SocketCoordinatePayloadType) => void) => {
      if (socket == null || socket.connected == false) {
        initSocket();
      }
      socket.on('coordinateToClient', callback);
    },
    [initSocket, socket]
  );

  const sendJoinMessage = useCallback(
    (peerId: string) => {
      if (socket == null || socket.connected == false) {
        initSocket();
      }
      socket.emit('join', {
        peerId,
      });
    },
    [initSocket, socket]
  );

  const recvJoinMessage = useCallback(
    (callback: ({ peerId }: SocketJoinReceivePayloadType) => void) => {
      if (socket == null || socket.connected == false) {
        initSocket();
      }
      socket.on('joinToClient', callback);
    },
    [initSocket, socket]
  );

  // receive someone leave message from server
  const recvLeaveMessage = useCallback(
    (callback: ({ peerId }: SocketJoinReceivePayloadType) => void) => {
      if (socket == null || socket.connected == false) {
        initSocket();
      }
      socket.on('leaveToClient', callback);
    },
    [initSocket, socket]
  );

  // receive error message from server
  const recvErrorMessage = useCallback(
    (callback: (error: string) => void) => {
      if (socket == null || socket.connected == false) {
        initSocket();
      }
      socket.on('errorToClient', callback);
    },
    [initSocket, socket]
  );

  const disconnectSocket = useCallback(() => {
    if (socket == null || socket.connected == false) {
      return;
    }
    socket.disconnect();
    socket.close();
    setDisconnected(true);
  }, [socket]);

  return [
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
  ] as const;
}
