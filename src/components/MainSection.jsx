/*eslint-disable*/
import { Html, Text, useGLTF, Wireframe } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

export default function MainSection() {
  const { nodes } = useGLTF("/model.glb");
  const directionalLightRef = useRef(null);
  const vec = new Vector3();
  useFrame(({ mouse }) => {
    directionalLightRef.current.position.lerp(
      vec.set(mouse.x * 10, mouse.y * 10, 1),
      0.03
    );
  });

  return (
    <>
      <mesh
        geometry={nodes.meshgeometry.geometry}
        scale={1.7}
        position={[0.08, 0, 0]}
      >
        <meshStandardMaterial wireframe />
        <Wireframe strokeOpacity={0.88} thickness={1} stroke={"black"} />
        <Html
          className="flex flex-col text-[3.5rem] justify-between font-black h-48 w-48 text-white select-none "
          position={[-0.24, 0.5, 0]}
          center
        >
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          />
        </Html>
        <Html
          center
          position={[0, 0.5, 0]}
          className="w-[17rem] h-[15rem] backdrop-invert opacity-90 pointer-events-none"
        />
        <spotLight ref={directionalLightRef} position={[.5, 4, 1]} intensity={1} color='white' />
        <Text
          scale={0.2}
          position={[0.01, 0.65, 0]}
          fillOpacity={1}
        >
          SOFTWARE
        </Text>
        <Text
          scale={0.2}
          position={[0.03, 0.3, 0]}
          fillOpacity={1}
        >
          DEVELOPER
        </Text>
      </mesh>
    </>
  );
}
