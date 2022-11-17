import React from 'react';
import { useBox } from '@react-three/cannon';

function PhyCube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  );
}

export default PhyCube;
