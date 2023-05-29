/*eslint-disable*/
import { Html, Text, useGLTF, Wireframe } from "@react-three/drei";

export default function MainSection() {
  const { nodes } = useGLTF("/model.glb");

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
          className="w-[17rem] h-[15rem] backdrop-invert opacity-90"
        />
        <directionalLight position={[5, 3, 1]} />
        <Text
          scale={0.2}
          position={[0.01, 0.65, 0]}
          strokeWidth={0.01}
          strokeColor="white"
          fillOpacity={0}
        >
          SOFTWARE
        </Text>
        <Text
          scale={0.2}
          position={[0.03, 0.3, 0]}
          strokeWidth={0.01}
          strokeColor="white"
          fillOpacity={0}
        >
          DEVELOPER
        </Text>
      </mesh>
    </>
  );
}
