import React, { useContext } from "react";
import Burger from "../Burger";
import styles from "./styles.module.scss";
import CustomCursorContext from "../mouseFollower/context/CustomCursorContext";
import { useSpring, a } from "react-spring";

const Menu = () => {
  const { addType } = useContext(CustomCursorContext);

  const logoStyle = useSpring({
    from: {
      opacity: 0,
      x: -100,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    delay: 300,
  });

  const logoBarStyle = useSpring({
    from: {
      width: "100%",
    },
    to: {
      width: "0%",
    },
    delay: 1300,
    config: {
      tension: 80,
      mass: 1.5,
    },
  });

  const burgerStyle = useSpring({
    from: {
      width: "0px",
      float: "right",
      overflow: 'hidden'
    },
    to: {
      width: "50px",
    },
    delay: 1600,
    config: {
      tension: 50,
    },
  });

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <a.div
          style={logoStyle}
          className={styles.logo}
          onMouseEnter={() => addType({ hover: true, text: "Inspired" })}
          onMouseLeave={() => addType({ hover: false, text: "" })}
        >
          <a.div style={logoBarStyle} />
          <span>Fusebox</span>
        </a.div>

        <a.div style={burgerStyle}>
          <Burger />
        </a.div>
      </div>
    </div>
  );
};

export default Menu;
