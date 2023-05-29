/*eslint-disable*/
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Overlay({ setButtonClickedPosition }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <>
      <nav className="absolute z-10 w-full text-center background">
        <span className="flex justify-center text-center items-center text-[#F2E100] sourcecodepro text-lg mt-5 ">
          <button
            onClick={() => {
              setButtonClickedPosition([0, 0, 3]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 450 815"
              overflow="visible"
            >
              <path
                fill="#F2E100"
                d="M450,455l-196-14l42,374H154l42-374L0,455       v-93l177,21c-32-50-85-136-85-218C92,80,147,0,225,0       c78,0,133,80,133,165c0,82-52,168-85,218l177-21V455z M172,87       c-8,10-14,23-19,38c-4,15-7,30-7,46l0,0c0,0,0,0,0,0       c0,29,8,64,26,103c15,35,35,68,53,95c17-27,37-60,53-95       c17-39,26-74,26-103c0-0,0-0-0-0c-0-15-2-31-7-46       c-4-14-11-27-19-38c-10-13-28-30-52-30       C200,57,182,73,172,87z"
              />
            </svg>
          </button>
        </span>
        <motion.ul
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-evenly font-thin text-[#FFFFFFB3] px-20 pt-5 text-lg"
        >
          <li className="w-20">
            <span>
              <button
                className="hover-underline"
                onClick={() => {
                  setButtonClickedPosition([-10, 0, 3]);
                }}
              >
                ABOUT
              </button>
            </span>
          </li>
          <li className="w-20">
            <span className="flex items-center justify-center text-xs whitespace-nowrap">
              {time.toLocaleTimeString()}
            </span>
          </li>
          <li className="w-20">
            <span>
              <button
                className="hover-underline"
                onClick={() => {
                  setButtonClickedPosition([10, 0, 3]);
                }}
              >
                WORK
              </button>
            </span>
          </li>
        </motion.ul>
        <motion.span
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#FFFFFFB3] w-full fixed  left-0 right-0 text-center bottom-10"
        >
          <button
            className="hover-underline"
            onClick={() => {
              setButtonClickedPosition([0, -10, 3]);
            }}
          >
            CONTACT
          </button>
        </motion.span>
      </nav>
    </>
  );
}
