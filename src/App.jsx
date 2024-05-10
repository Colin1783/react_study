import React from "react";

function App(props) {
  // 이름 있는 함수
  function action1() {
    console.log("action1 called");
  }
  // 이름 없는 함수
  const action2 = function () {
    console.log("anonymous function called");
  };

  action1();

  return (
    <div>
      <button onClick={action1}>클릭1</button>
      <button onClick={action2}>클릭2</button>
      <button
        onClick={function () {
          console.log("anonymous function2 called");
        }}
      >
        클릭3
      </button>
    </div>
  );
}

export default App;
