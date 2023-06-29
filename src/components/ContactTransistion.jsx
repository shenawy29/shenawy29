import { useTransition, animated } from "@react-spring/web";
import { useContext } from "react";
import AppContext from "../context/Context";

export default function ContactTransistion() {
  const { state, dispatch } = useContext(AppContext);
  const { transistionsOpen } = state;

  const contactTransistion = useTransition(transistionsOpen, {
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

  return contactTransistion(
    (style, transistionsOpen) =>
      transistionsOpen && (
        <button
          className="flex"
          onClick={() =>
            (window.location.href = "mailto:alshenawy10203022@gmail.com")
          }
        >
          <svg width={155.95} height={64}>
            <animated.text
              style={style}
              textAnchor="middle"
              x="50%"
              y="80%"
              stroke="white"
            >
              Contact
            </animated.text>
          </svg>
        </button>
      )
  );
}
