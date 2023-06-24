import { useTransition, animated, easings } from "@react-spring/web";

export default function ContactTransistion() {
  const data = [1];
  const contactTransistion = useTransition(data, {
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

  return contactTransistion(
    (style, data) =>
      data && (
        <button
          className="flex"
          onClick={() =>
            (window.location.href = `mailto:alshenawy10203022@gmail.com`)
          }
        >
          <animated.div style={style}>
            <span>C</span>
          </animated.div>
          <animated.div style={style}>
            <span>o</span>
          </animated.div>
          <animated.div style={style}>
            <span>n</span>
          </animated.div>
          <animated.div style={style}>
            <span>t</span>
          </animated.div>
          <animated.div style={style}>
            <span>a</span>
          </animated.div>
          <animated.div style={style}>
            <span>c</span>
          </animated.div>
          <animated.div style={style}>
            <span>t</span>
          </animated.div>
        </button>
      )
  );
}
