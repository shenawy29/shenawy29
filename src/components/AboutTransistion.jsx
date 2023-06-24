import { useTransition, animated, easings } from "@react-spring/web";

export default function AboutTransistion() {
  const data = [1];
  const aboutTransistion = useTransition(data, {
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

  return aboutTransistion(
    (style, data) =>
      data && (
        <button className="flex">
          <animated.div style={style}>
            <span>A</span>
          </animated.div>
          <animated.div style={style}>
            <span>b</span>
          </animated.div>
          <animated.div style={style}>
            <span>o</span>
          </animated.div>
          <animated.div style={style}>
            <span>u</span>
          </animated.div>
          <animated.div style={style}>
            <span>t</span>
          </animated.div>
        </button>
      )
  );
}
