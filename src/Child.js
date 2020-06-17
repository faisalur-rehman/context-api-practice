import React, { useContext } from "react";
import themeContext from "./ThemeContext";
import "./App.css";

const Child = () => {
  const theme = useContext(themeContext);
  let themeStyle = theme[0] === "Light" ? "light" : "dark";
  return (
    <div className={`main ${themeStyle}`}>
      <h1>Theme is {theme[0]}</h1>
      <button
        onClick={() => {
          theme[1](theme[0] === "Light" ? "Dark" : "Light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Child;
