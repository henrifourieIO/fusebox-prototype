import React from "react";

const Background = () => {
  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(60% 80% at 0% 0%, rgba(0, 156, 244, 0.24) 0%, rgba(0, 163, 255, 0) 100%)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          background:
            "radial-gradient(100% 100% at 100% 100%, rgba(255, 150, 28, 0.2) 0%, rgba(255, 153, 0, 0) 100%)",
          position: "fixed",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          zIndex: 0,
        }}
      />
    </>
  );
};
export default Background