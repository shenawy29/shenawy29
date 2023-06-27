import { MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

export default function Mesh() {
  const config = {
    bounces: 2,
    aberrationStrength: 0.001,
    ior: 2.75,
    fresnel: 0.001,
    color: "#4f2b00",
    fastChroma: true,
  };
  const { nodes } = useGLTF("/model.glb");
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
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
