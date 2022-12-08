import { RemoteStreamsType } from '@src/hooks/media/useRemoteStream';
import cx from 'classnames';
import React, { FunctionComponent } from 'react';
import { Video } from '../atom';

const UserVoiceView: FunctionComponent<{
  localStream: MediaStream;
  remoteStreams: RemoteStreamsType[];
}> = ({ localStream, remoteStreams }) => {
  return (
    <div className="w-full">
      <div className={cx('relative', 'flex flex-col justify-center items-center', 'space-y-2')}>
        <Video mediaStream={localStream} muted />
        <div className="flex h-16 space-x-2">
          {remoteStreams.length > 0 &&
            remoteStreams.map((remoteStream) => (
              <Video key={remoteStream.peerId} mediaStream={remoteStream.stream} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserVoiceView;
