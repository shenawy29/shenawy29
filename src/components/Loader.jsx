import React from "react";
import { useTransition, useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export default function Loader() {
  const [isOpen, setIsOpen] = useState(true);
  const { progress } = useProgress();
  useEffect(() => {}, []);

  const transition = useTransition(isOpen, {
    from: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      duration: 2000,
    },
  });

  const props = useSpring({
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      duration: 2000,
    },
  });

  return transition(
    (style, isOpen) =>
      isOpen && (
        <animated.div
          style={style}
          className="absolute z-30 flex flex-col items-center justify-center w-screen h-screen bg-black pointer-events-none"
        >
          <animated.button
            disabled={progress !== 100}
            className={
              "w-[14rem] px-5 py-3 border border-[#b58919] text-[#b58919] pointer-events-auto"
            }
            style={props}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span>
              {progress !== 100 ? (
                <span>Weighing your heart...</span>
              ) : (
                <span>Access Aaru</span>
              )}
            </span>
          </animated.button>
        </animated.div>
      )
  );
}
