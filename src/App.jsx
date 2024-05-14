import React, { useEffect, useState } from "react";

function MyComp() {
  // 특정 순간에 실행되는 메소드를 파라미터로 받음
  // 특정 순간 : 예) initial render, unmount, update, re-render..
  // 첫번째 파라미터 : 함수
  // 두번째 파라미터 : 배열. dependency array
  // 두번째 파라미터가 없으면 initial render 시에만 실행
  // 두번째 파라미터가 있으면, 배열에 있는 값이 바뀌었을 때만 실행

  useEffect(() => {
    console.log("every render");
  });

  useEffect(() => {
    console.log("initial render");
  }, []);

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
function App(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      {show && <MyComp />}
    </div>
  );
}

export default App;
