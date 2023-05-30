import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function Camera({ buttonClickedPosition }) {
  const vec = new Vector3(...buttonClickedPosition);
  useFrame(({ camera }) => {
    camera.position.lerp(vec, 0.05);
  });
}
