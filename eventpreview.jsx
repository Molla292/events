import { ARCanvas } from '@react-three/xr';

function ARPreview({ event }) {
  return (
    <ARCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh position={[0, 0, -3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={event.arColor} />
      </mesh>
    </ARCanvas>
  );
}