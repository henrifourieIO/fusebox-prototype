import React, { useRef, useContext } from "react";
import styles from "./styles.module.scss";
import CustomCursorContext from "../mouseFollower/context/CustomCursorContext";
import { a, useSpring } from "react-spring";

const Hero = () => {
  const { addType } = useContext(CustomCursorContext);

  const nextRef = useRef();

  const prop = useSpring({
    from: {
      y: 120
    },
    to: {
      y: 0
    },
    delay: 2000,
    config: {
      mass: 1,
      tension: 100
    }
  });

  const prop1 = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 2200,
    config: {
      mass: 1,
      tension: 100
    }
  });

  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        <div className={styles.titleWrapper}>
          <div
            className={styles.textLine}
            onMouseEnter={() => addType({ hover: true, text: "" })}
            onMouseLeave={() => addType({ hover: false, text: "" })}
          >
            {/* <div /> */}
            <a.h1 style={prop}>Digitally</a.h1>
          </div>
          <div
            className={styles.textLine}
            onMouseEnter={() => addType({ hover: true, text: "" })}
            onMouseLeave={() => addType({ hover: false, text: "" })}
          >
            {/* <div /> */}
            <a.h1 style={prop}>Inspired</a.h1>
          </div>
        </div>
      </div>
      <div
        ref={nextRef}
        className={styles.next}
        onMouseEnter={() => addType({ hover: true, text: "Explore" })}
        onMouseLeave={() => addType({ hover: false, text: "" })}
      >
        <a.img src="/arrow.svg" alt="arrow" style={prop1} />
      </div>
    </div>
  );
};

export default Hero;
