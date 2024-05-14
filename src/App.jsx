import React, { useEffect, useState } from "react";

function MyComp() {
  const [count, setCount] = useState(0);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  // 특정 순간에 실행되는 메소드를 파라미터로 받음
  // 특정 순간 : 예) initial render, unmount, update, re-render..
  // 첫번째 파라미터 : 함수
  // 두번째 파라미터 : 배열. dependency array
  // 두번째 파라미터가 없으면 initial render 시에만 실행
  // 두번째 파라미터가 있으면, 배열에 있는 값이 바뀌었을 때만 실행
  //
  useEffect(() => {
    console.log("every render");
  });

  // 첫번째 파라미터(함수)의 리턴은 unmount 시에 실행됨+++++
  useEffect(() => {
    console.log("unmount 될 때 실행되는 메소드");
  });

  //어떤 값(주로 state, dependency)이 바뀌었을 때만 실행
  useEffect(() => {
    console.log("text1 값이 바뀌었을 때 실행");
  }, [text1]);

  useEffect(() => {
    console.log("text2 값이 바뀌었을 때 실행");
  }, [text2]);

  useEffect(() => {
    console.log("text1 또는 text2 값이 바뀌엇을 때");
  }, [text1, text2]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <div>
        <h1>{text1}</h1>
        <input type="text" onChange={(e) => setText1(e.target.value)} />
      </div>
      <div>
        <h1>{text2}</h1>
        <input type="text" onChange={(e) => setText2(e.target.value)} />
      </div>
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
