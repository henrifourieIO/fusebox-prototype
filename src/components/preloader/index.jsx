import styles from "./styles.module.scss";
import { Lines } from "react-preloaders";
import CustomCursorContext from "../mouseFollower/context/CustomCursorContext";
import React, { useContext } from "react";

const Preloader = ({ loading, open, setOpen }) => {
  const { addType } = useContext(CustomCursorContext);
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          zIndex: 99991,
          opacity: loading ? 0 : open ? 1 : 0,
          transition: "700ms",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          visibility: loading ? "hidden" : open ? "visible" : "hidden",
        }}
      >
        <button
          className={`${styles.closeBtn} ${loading ? styles.hide : ''}`}
          onClick={() => {setOpen(!open); addType({ hover: false, text: "" })}}
          onMouseEnter={() => addType({ hover: true, text: "Open" })}
          onMouseLeave={() => addType({ hover: false, text: "" })}
          disabled={!open}
        >
          EXPLORE
        </button>
      </div>
      {open ? (
        <Lines color={"#fff"} background={"#000"} animation={"fade"} />
      ) : null}
    </>
  );
};

export default Preloader;
