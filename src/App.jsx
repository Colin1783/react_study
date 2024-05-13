import React from "react";
import val, { v1 } from "./myValues.jsx";
import someVal from "./MyComps.jsx";

// default export는 아무 이름으로 import 가능하다.
// default export는 한 파일에 한 개만 존재할 수 있다.

function App(props) {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li>v1: {v1}</li>
        <li>v2: {val}</li>
        <li>v3: {someVal}</li>
      </ul>
    </div>
  );
}

export default App;
