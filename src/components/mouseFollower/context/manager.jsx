import React, { useState } from "react";
import CustomCursorContext from "../context/CustomCursorContext";

const CustomCursorManager = ({ children }) => {
  const [type, setType] = useState({hover: false, text: ''});
  const addType = (payload) => {
    setType(payload)
  }
  return (
    <CustomCursorContext.Provider value={{ type, addType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;