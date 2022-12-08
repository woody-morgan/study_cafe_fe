import { PeerJSOption } from 'peerjs';

export const envConfig = {
  appBaseUrl: process.env.APP_BASE_URL,
  baseUrl: process.env.BASE_URL,
  apiBaseUrl: process.env.API_BASE_URL,
  googleMapKey: process.env.GOOGLE_MAP_KEY,
  tossPaymentKey: process.env.TOSS_PAYMENT_KEY,
  appTitle: process.env.APP_TITLE,
};

export const socketConfig = {
  secure: process.env.SOCKET_SECURE === 'true',
  url: process.env.SOCKET_URL,
};

export const peerConfig: PeerJSOption = {
  host: process.env.PEER_HOST,
  port: Number(process.env.PEER_PORT),
  debug: Number(process.env.PEER_DEBUG),
  path: process.env.PEER_PATH,
  secure: process.env.PEER_SECURE === 'true',
  config: {
    iceServers: [
      {
        urls: process.env.TURN_URL,
        username: process.env.TURN_USERNAME,
        credential: process.env.TURN_CREDENTIAL,
      },
    ],
  },
};
