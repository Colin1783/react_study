import React from "react";
// import: 다른 파일에 있는 변수를 불러올 때 사용
import { value1, value2, value3 as v3, value4 } from "./MyValues.js"; // 여러개 불러오기
import { myAddress, myStr, value3 } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      value1: {value1}
      <br />
      value2: {value2}
      <br />
      value3: {v3}
      <br />
      value4.name: {value4.name}
      <br />
      value4.team: {value4.team}
      <br />
      <div>{myStr}</div>
      <div>{myAddress}</div>
      <div>{value3}</div>
    </div>
  );
}

export default App;
