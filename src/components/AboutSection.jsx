import { Html } from "@react-three/drei";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

export default function AboutSection() {
  return (
    <>
      <Html
        position={[-10, 0, 0]}
        center
        className="flex flex-col items-center justify-center space-y-8 sm:flex-row sm:space-x-10 sm:space-y-0 "
      >
        <p className=" w-[50vw] text-center text-white sm:text-sm text-[12px] ">
          HEY! MY NAME IS MOHAMED EL SHENAWY. I'M AN EGYPTIAN SOFTWARE DEVELOPER
          BASED IN PORT SAID, EGYPT. THIS WEBSITE IS A PERSONAL PROJECT THAT
          SERVES AS A PORTFOLIO. BUILT USING REACT, THREE.JS/REACT-THREE-FIBER,
          BLENDER, AND FRAMER-MOTION. YOU CAN CONTACT ME USING THE CONTACT PAGE
          VIA EMAIL, OR THROUGH ANY OF MY SOCIAL MEDIA.
        </p>
        <div className="flex items-center text-3xl justify-evenly w-[10rem] flex-wrap ">
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiHtml5 />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiCss3 />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiJavascript />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiTypescript />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiTailwindcss />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiReact />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiNextdotjs />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiPython />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all ">
              <SiNumpy />
            </span>
          </button>
          <button className="p-2">
            <span className="text-[#727272] hover:text-[#F2E100] transition-all">
              <SiPandas />
            </span>
          </button>
        </div>
      </Html>
    </>
  );
}
