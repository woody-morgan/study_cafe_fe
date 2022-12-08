import { useEffect, useState } from 'react';

const userMediaConfig = {
  audio: { sampleSize: 4, echoCancellation: true, noiseSuppression: true },
};

export default function useUserMedia() {
  const [mediaStream, setMediaStream] = useState<MediaStream>(null);

  useEffect(() => {
    const enableStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(userMediaConfig);
        setMediaStream(stream);
      } catch (error) {
        console.log(error);
      }
    };

    if (!mediaStream) {
      enableStream();
    }

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
        setMediaStream(null);
      }
    };
  }, [mediaStream]);

  return mediaStream;
}
