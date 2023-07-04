import { useSpring } from "@react-spring/three";
import { Howl } from "howler";
import { useReducer, createContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "TOGGLE_NAVIGATE_OPTIONS":
        return {
          ...state,
          navigateOptionsOpen: !state.navigateOptionsOpen,
        };
      case "TURN_NAVIGATE_OPTIONS_OFF":
        return {
          ...state,
          navigateOptionsOpen: false,
        };
      case "TOGGLE_TRANSISTIONS":
        return {
          ...state,
          transistionsOpen: !state.transistionsOpen,
        };
      case "TURN_TRANSISTIONS_OFF":
        return {
          ...state,
          transistionsOpen: false,
        };
      case "TOGGLE_WORK_PAGE":
        return {
          ...state,
          workPageOpen: !state.workPageOpen,
        };
      case "TURN_WORK_PAGE_OFF":
        return {
          ...state,
          workPageOpen: false,
        };

      case "TOGGLE_ABOUT_PAGE":
        return {
          ...state,
          aboutPageOpen: !state.aboutPageOpen,
        };
      case "TURN_ABOUT_PAGE_OFF":
        return {
          ...state,
          aboutPageOpen: false,
        };
      default:
        return state;
    }
  }

  const initialState = {
    navigateWordProps: useSpring(() => ({ fillOpacity: 0 })),
    navigateOptionsOpen: false,
    workPageOpen: false,
    aboutPageOpen: false,
    transistionsOpen: false,
    audio: new Howl({
      src: ["/Wandering.mp3"],
      html5: true,
      loop: true,
    }),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
