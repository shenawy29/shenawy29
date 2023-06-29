import { useTransition, animated } from "@react-spring/web";
import { useContext } from "react";
import AppContext from "../context/Context";

export default function WorkTransistion() {
  const { state, dispatch } = useContext(AppContext);
  const { transistionsOpen } = state;

  const workTransition = useTransition(transistionsOpen, {
    from: {
      strokeDashoffset: "100%",
      strokeDasharray: "100%",
    },
    enter: {
      strokeDashoffset: "0%",
      strokeDasharray: "38%",
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

  return workTransition(
    (style, transistionsOpen) =>
      transistionsOpen && (
        <button className="flex">
          <svg width={105.31} height={64}>
            <animated.text
              style={style}
              textAnchor="middle"
              x="50%"
              y="80%"
              stroke="white"
            >
              Work
            </animated.text>
          </svg>
        </button>
      )
  );
}
