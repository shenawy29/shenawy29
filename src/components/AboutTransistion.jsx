import { useTransition, animated } from "@react-spring/web";
import { useContext } from "react";
import AppContext from "../context/Context";

export default function AboutTransistion() {
  const { state, dispatch } = useContext(AppContext);
  const { transistionsOpen } = state;

  const aboutTransistion = useTransition(transistionsOpen, {
    from: {
      strokeDashoffset: "100%",
      strokeDasharray: "100%",
    },
    enter: {
      strokeDashoffset: "0%",
      strokeDasharray: "20%",
    },
    leave: {
      strokeDashoffset: "100%",
      strokeDasharray: "100%",
    },
    config: {
      tension: 200,
      friction: 120,
    },
  });

  return aboutTransistion(
    (style, transistionsOpen) =>
    transistionsOpen && (
        <button className="flex">
          <svg width={123.94} height={64}>
            <animated.text
              style={style}
              textAnchor="middle"
              x="50%"
              y="80%"
              stroke="white"
            >
              About
            </animated.text>
          </svg>
        </button>
      )
  );
}
