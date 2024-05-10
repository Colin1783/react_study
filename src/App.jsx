import React from "react";
// props 이름은 lowerCamelCase로 작성합니다.
// 예약어는 사용하지 않습니다.(예: class -> className, for -> htmlFor, let -> letValue...)

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <label htmlFor="input1">name</label>
      <input id={"input1"} type="text" />
      <p className={"error note"}></p>
      <MyComp number={3} pageNumber={3} />
    </div>
  );
}

export default App;
