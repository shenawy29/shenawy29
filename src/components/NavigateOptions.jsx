import { useTransition, animated } from "@react-spring/web";
import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/Context";
import AboutTransistion from "./AboutTransistion";
import WorkTransistion from "./WorkTransistion";
import ContactTransistion from "./ContactTransistion";
import WorkPage from "./WorkPage";
import AboutPage from "./AboutPage";

export default function NavigateOptions() {
  const { state, dispatch } = useContext(AppContext);
  const { navigateOptionsOpen } = state;
  const modal = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (e.target.tagName === "DIV") {
        dispatch({ type: "TURN_WORK_PAGE_OFF" });
        dispatch({ type: "TURN_ABOUT_PAGE_OFF" });
      } else if (e.target.tagName === "CANVAS") {
        dispatch({ type: "TURN_NAVIGATE_OPTIONS_OFF" });
      }
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [state]);

  const transition = useTransition(navigateOptionsOpen, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {},
  });

  return transition(
    (style, navigateOptionsOpen) =>
      navigateOptionsOpen && (
        <animated.div
          style={style}
          ref={modal}
          className="absolute z-10 flex items-center justify-center w-full h-full text-5xl text-white bg-[#000000bf] pointer-events-none"
        >
          <ul className="flex flex-col items-center justify-around w-full h-full font-thin sm:flex-row ">
            <li
              className="text-center pointer-events-auto transition-[filter] duration-[250ms] hover:blur-sm"
              onClick={() => {
                dispatch({ type: "TOGGLE_ABOUT_PAGE" });
              }}
            >
              <AboutTransistion />
            </li>
            <li
              className="text-center pointer-events-auto transition-[filter] duration-[250ms] hover:blur-sm "
              onClick={() => {
                dispatch({ type: "TOGGLE_WORK_PAGE" });
              }}
            >
              <WorkTransistion />
            </li>
            <li className="text-center pointer-events-auto transition-[filter] duration-[250ms] hover:blur-sm">
              <ContactTransistion />
            </li>
          </ul>
          <WorkPage />
          <AboutPage />
        </animated.div>
      )
  );
}
