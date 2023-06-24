import { Canvas, useThree } from "@react-three/fiber";
import MainSection from "./components/MainSection";
import Overlay from "./components/Overlay";
import { AppProvider } from "./context/Context.jsx";

export default function App() {
  return (
    <AppProvider>
      <Overlay />
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
        }}
        camera={{ position: [0, 0, 3.5] }}
      >
        <MainSection />
      </Canvas>
    </AppProvider>
  );
}
