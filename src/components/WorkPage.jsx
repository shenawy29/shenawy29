import { useContext } from "react";
import { useTransition, animated } from "@react-spring/web";
import AppContext from "../context/Context";

export default function WorkPage() {
  const { state, dispatch } = useContext(AppContext);
  const { workPageOpen } = state;

  const transition = useTransition(workPageOpen, {
    from: {
      y: "-100%",
      opacity: 0,
    },
    enter: {
      y: "0%",
      opacity: 1,
    },
    leave: {
      opacity: 0,
      y: "-100%",
    },
    config: {
      tension: 280,
      friction: 120,
    },
  });

  return transition(
    (style, workPageOpen) =>
      workPageOpen && (
        <animated.div
          style={style}
          className="absolute z-50 flex items-center justify-center w-screen h-screen text-xl text-white bg-[#000000bf] pointer-events-auto flex-col select-none overflow-y-scroll"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <a
              href="https://tesla-clone-ten-iota.vercel.app/"
              target="_blank"
              className="flex items-center flex-col justify-center min-h-[10rem] sm:w-[30rem] w-[15rem] space-y-5"
            >
              <img src="/TeslaClone.png" alt="Tesla Clone Image" />
              <span className="text-sm font-medium">TESLA CLONE</span>
            </a>
          </div>
        </animated.div>
      )
  );
}
