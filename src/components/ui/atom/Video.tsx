import React, { FunctionComponent, useEffect, useRef } from 'react';

export type VideoShape = {
  mediaStream: MediaStream;
  muted?: boolean;
  className?: string;
};

const VideoWrapper: FunctionComponent<VideoShape> = ({ mediaStream, muted = false, className }) => {
  const viewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!viewRef.current) return;
    viewRef.current.srcObject = mediaStream ? mediaStream : null;
  }, [mediaStream]);

  return <video ref={viewRef} className="hidden" autoPlay playsInline muted={muted} />;
};

export default VideoWrapper;
