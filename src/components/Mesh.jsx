import { MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

export default function Mesh() {
  const config = {
    bounces: 1,
    aberrationStrength: 0.001,
    ior: 2.8,
    fresnel: 0.02,
    color: "#343434",
    fastChroma: true,
  };
  const { nodes } = useGLTF("/model.glb");
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/moonless_golf_4k.hdr"
  );
  return (
    <mesh
      geometry={nodes.meshgeometry.geometry}
      scale={1.7}
      position={[0.08, 0, 0]}
    >
      <MeshRefractionMaterial envMap={texture} {...config} />
    </mesh>
  );
}
