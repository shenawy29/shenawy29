import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/Context";
import Loader from "./Loader";
import { animated, useSpring } from "@react-spring/web";
import NavigateOptions from "./NavigateOptions";

export default function Overlay() {
  const { state, dispatch } = useContext(AppContext);
  const [spring, api] = useSpring(() => ({ opacity: 0 }), []);
  const [navigateWordSpring, navigateWordAPI] = state.navigateWordProps;

  return (
    <>
      <Loader />
      <div className="absolute right-0 z-20 flex justify-center p-5 space-x-3 text-white">
        <animated.span className="pointer-events-none" style={spring}>
          Navigate
        </animated.span>
        <button
          onMouseEnter={() => {
            navigateWordAPI.start({ fillOpacity: 1 });
            api.start({ opacity: 1, delay: 500 });
          }}
          onMouseLeave={() => {
            navigateWordAPI.start({ fillOpacity: 0 });
            api.start({ opacity: 0, delay: 500 });
          }}
          onClick={() => {
            dispatch({ type: "TOGGLE_NAVIGATE_OPTIONS" });
            dispatch({ type: "TOGGLE_TRANSISTIONS" });
            dispatch({ type: "TURN_WORK_PAGE_OFF" });
            dispatch({ type: "TURN_ABOUT_PAGE_OFF" });
          }}
        >
          <span>
            <RxHamburgerMenu color="white" size={"1.5em"} />
          </span>
        </button>
      </div>
      <NavigateOptions />
    </>
  );
}
