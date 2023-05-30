/*eslint-disable*/
import { Html, Text, useGLTF, Wireframe } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

export default function MainSection() {
  const { nodes } = useGLTF("/model.glb");
  const spotLightRef = useRef();
  const vec = new Vector3();
  useFrame(({ mouse }) => {
    spotLightRef.current.position.lerp(
      vec.set(mouse.x * 10, mouse.y * 10, 1),
      0.03
    );
  });

  return (
    <mesh
      geometry={nodes.meshgeometry.geometry}
      scale={1.7}
      position={[0.08, 0, 0]}
    >
      <meshStandardMaterial wireframe />
      <Wireframe strokeOpacity={0.5} stroke={"black"} />
      <Html
        center
        position={[0, 0.5, 0]}
        className="w-[17rem] h-[15rem] backdrop-invert opacity-90 pointer-events-none"
      />
      <spotLight
        ref={spotLightRef}
        position={[0.5, 4, 1]}
        intensity={1}
        color="white"
      />
      <Text scale={0.2} position={[0.01, 0.65, 0]}>
        SOFTWARE
      </Text>
      <Text scale={0.2} position={[0.03, 0.3, 0]}>
        DEVELOPER
      </Text>
    </mesh>
  );
}
