import React, { useState } from "react";
import "./App.css";
import themeContext from "./ThemeContext.js";
import Parent from "./Parent";
function App() {
  const theme = useState("Light");
  return (
    <themeContext.Provider value={theme}>
      <div className="App">
        <Parent />
      </div>
    </themeContext.Provider>
  );
}

export default App;
