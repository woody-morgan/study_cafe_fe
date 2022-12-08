import { useCallback, useEffect, useState } from 'react';

type AddRemoteCallback = {
  peerId: string;
  stream: MediaStream;
};

export type RemoteStreamsType = {
  peerId: string;
  stream: MediaStream;
};
export type AddRemoteStreamType = ({ peerId, stream }: AddRemoteCallback) => void;
export type RemoveRemoteStreamType = (peerId: string) => void;

export default function useRemoteStreams() {
  const [remoteStreams, setRemoteStreams] = useState<RemoteStreamsType[]>([]);

  const addRemoteStream = ({ peerId, stream }: AddRemoteCallback) => {
    setRemoteStreams((prev) => [...prev, { peerId, stream }]);
  };

  const removeRemoteStream = useCallback((peerId) => {
    setRemoteStreams((prev) => prev.filter(({ peerId: prevPeerId }) => prevPeerId !== peerId));
  }, []);

  useEffect(() => {
    return () => {
      remoteStreams.forEach((stream) => {
        stream.stream.getTracks().forEach((track) => {
          track.stop();
        });
      });
    };
  });

  return [remoteStreams, addRemoteStream, removeRemoteStream] as const;
}
