export type SocketMessagePayloadType = {
  name: string;
  text: string;
};

export type SocketJoinReceivePayloadType = {
  peerId: string;
};

export type SocketCoordinatePayloadType = {
  clientId: string;
  x: string;
  z: string;
};
