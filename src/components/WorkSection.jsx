import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";

export default function WorkSection() {
  const { camera } = useThree();
  const [cameraPosition, setCameraPosition] = useState(camera.position.x);
  useFrame(({ camera }) => {
    setCameraPosition(camera.position.x);
  });

  return (
    <>
      <Html center position={[10, 0, 0]}>
        <a
          href="https://tesla-clone-n5ihp6jwf-shenawy29.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="tesla_div h-[20rem] w-[10rem] flex items-center justify-center">
            <img
              style={{
                objectPosition: `${cameraPosition * 5}%`,
              }}
              src="/TeslaClone.png"
              className={`tesla_image object-cover h-[100%] opacity-30 hover:blur-sm transition-[filter] duration-500 `}
            />
            <h1 className="tesla_title transition-all duration-500 pointer-events-none text-white absolute opacity-0">
              Tesla Clone
            </h1>
          </div>
        </a>
      </Html>
    </>
  );
}
