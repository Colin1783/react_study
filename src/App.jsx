import React, { useState } from "react";

function MyComp() {
  // react conponent 는 상태(state)가 변경되면 다시 렌더링된다.
  // 각 component의 state는 react가 관리한다.

  let val = 0;

  function increment() {
    val++;
    console.log(val);
  }
  return (
    <div>
      {val}
      <button onClick={increment}> 증가 </button>
    </div>
  );
}

function MyComp2() {
  // useState() 함수를 사용하여 상태를 관리할 수 있다.
  // useState() 함수는 배열을 반환한다.
  // 배열의 첫번째 요소는 상태값이고, 두번째 요소는 상태를 변경하는 함수이다.
  // useState() 함수의 인자로 초기값을 전달할 수 있다.

  const [val, setVal] = useState(0);

  function increment() {
    setVal(val + 1);
  }

  return (
    <div>
      {val}
      <button onClick={increment}> 증가 </button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;
