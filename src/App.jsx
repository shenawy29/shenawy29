/* eslint-disable */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Overlay from "./components/Overlay";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import MainSection from "./components/MainSection";
import ContactSection from "./components/ContactSection";
import { EffectComposer, Glitch, Noise } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import Camera from "./components/Camera";

export default function App() {

  const [buttonClickedPosition, setButtonClickedPosition] = useState([0, 0, 3]);
  return (
    <>
      <main className="h-full">
        <Overlay setButtonClickedPosition={setButtonClickedPosition} />
        <Canvas className={"h-screen"}>
          <Camera buttonClickedPosition={buttonClickedPosition} />
          {/* <Perf position="bottom-left" /> */}
          <MainSection />
          <WorkSection />
          <ContactSection />
          <AboutSection />
          <EffectComposer>
            <Glitch
              delay={[1.5, 1.8]}
              duration={[0.2, 0.8]}
              strength={[0.2, 1.0]}
              mode={GlitchMode.SPORADIC}
              ratio={0.85}
            />
          </EffectComposer>
        </Canvas>
      </main>
    </>
  );
}
