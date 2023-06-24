import { useTransition, animated } from "@react-spring/web";

export default function WorkTransistion() {
  const data = [1];
  const workTransition = useTransition(data, {
    from: {
      rotateY: -90,
    },
    enter: {
      rotateY: 0,
    },
    leave: {
      rotateY: -90,
    },
    config: {
      duration: 2000,
    },
  });

  return workTransition(
    (style, data) =>
      data && (
        <button className="flex" >
          <animated.div style={style} >
            <span>W</span>
          </animated.div>
          <animated.div style={style} >
            <span>o</span>
          </animated.div>
          <animated.div style={style} >
            <span>r</span>
          </animated.div>
          <animated.div style={style} >
            <span>k</span>
          </animated.div>
        </button>
      )
  );
}
