import React from "react";
import { v1, v2 } from "./Value1.js";
import { c1, c2 } from "./Value2.js";

function App(props) {
  return (
    <div>
      <div>{v1}</div>
      <div>{v2}</div>
      <div>{c1}</div>
      <div>{c2}</div>
    </div>
  );
}

export default App;
