import { useContext } from "react";
import { useTransition, animated } from "@react-spring/web";
import AppContext from "../context/Context";


export default function AboutPage() {
  const { state, dispatch } = useContext(AppContext);
  const { aboutPageOpen } = state;

  const transition = useTransition(aboutPageOpen, {
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
    (style, aboutPageOpen) =>
      aboutPageOpen && (
        <animated.div
          style={style}
          className="absolute z-50 flex items-center justify-center w-screen h-screen text-xl text-white bg-[#000000bf] pointer-events-auto overflow-y-scroll flex-col select-none"
        >
          <div className="flex flex-col items-start justify-start h-full">
            <div className="flex items-center flex-col sm:flex-row justify-center min-h-[22rem] sm:w-[60vw] w-full mt-[10rem]">
              <div className="sm:h-full sm:w-[13rem] whitespace-nowrap">
                What this is
              </div>
              <p className="font-extralight sm:w-[40%] w-[90%] h-full sm:text-left text-center ">
                This is a personal project that also acts as a portfolio. It was
                created with React, Three.s/React-Three-Fiber, React-Three-Drei, Blender, Tailwind
                CSS, and React-Spring.
              </p>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center min-h-[22rem] sm:w-[60vw] w-full">
              <div className="sm:h-full sm:w-[13rem] whitespace-nowrap">
                Who I am
              </div>
              <p className="font-extralight sm:w-[40%] w-[90%] h-full sm:text-left text-center ">
                I am an Egyptian software developer located in Port Said. I am a
                sophomore studying computer science at Suez Canal University.
                Learning new programming languages and frameworks and pushing
                their limits is one of my favourite things to do.
              </p>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center min-h-[22rem] sm:w-[60vw] w-full">
              <div className="sm:h-full sm:w-[13rem] whitespace-nowrap">
                What I do
              </div>
              <div className="font-extralight sm:w-[40%] w-[90%] h-full sm:text-left text-center ">
                <p>
                  I am currently proficient in multiple programming languages
                  and frameworks.
                </p>
                <ul className="flex flex-col flex-wrap h-[10rem] font-normal text-white mt-10">
                  <li>
                    <span>Python</span>
                  </li>
                  <li>
                    <span>JavaScript</span>
                  </li>
                  <li>
                    <span>TypeScript</span>
                  </li>
                  <li>
                    <span>HTML</span>
                  </li>
                  <li>
                    <span>CSS</span>
                  </li>
                  <li>
                    <span>Tailwind CSS</span>
                  </li>
                  <li>
                    <span>React</span>
                  </li>
                  <li>
                    <span>Next.js</span>
                  </li>
                  <li>
                    <span>Node.js</span>
                  </li>
                  <li>
                    <span>Express.js</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </animated.div>
      )
  );
}
