import React from "react";
import { v1, v2, v3 } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li>v1: {v1}</li>
        <li>v2: {v2}</li>
        <li>v3: {v3}</li>
      </ul>
    </div>
  );
}

export default App;
