import { Sparkles, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3, Color } from "three";
import { useContext } from "react";
import { animated } from "@react-spring/three";
import AppContext from "../context/Context";
import Mesh from "./Mesh";

export default function MainSection() {
  const { state } = useContext(AppContext);
  const AnimatedText = animated(Text);

  // Camera move controls
  const vec = new Vector3();
  useFrame(({ mouse, camera }) => {
    vec.set(mouse.x, mouse.y * 0.5, 3.5);
    camera.position.lerp(vec, 0.01);
    camera.lookAt(new Vector3());
  });

  return (
    <>
      <Mesh />
      <Sparkles
        count={500}
        scale={7}
        speed={0.05}
        color={new Color("orange")}
      />
      <AnimatedText
        font="/WorkSans-ExtraLight.ttf"
        position={[0, 0, -0.5]}
        {...state.navigateWordProps[0]}
      >
        navigate
      </AnimatedText>
    </>
  );
}
