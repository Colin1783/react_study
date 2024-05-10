import React from "react";

function App(props) {
  // function : 함수
  // 1. 이름 있는 함수
  function action1(p1, p2) {
    // 명령문(실행문)
    return p1 + p2;
  }

  // 2. 이름 없는 함수 : 값으로 취급
  const a = function (p1, p2) {
    return p1 + p2;
  };

  // 3. arrow function (화살표 함수) : 자바 람다식 같은 거 =>
  // 3.1 파라미터가 여러개, 명령문이 여러개
  const b = (p1, p2, p3) => {
    // 명령문1
    // 명령문2
  };

  // 3.2 파라미터가 없고, 명령문이 여러 개
  const c = () => {
    //명령문들
  };

  // 3.3 파라미터가 한 개, 명령문이 여러개
  const d = (p) => {
    //명령문들
  };

  // 3.4 명령문이 하나일 때
  const e = () => console.log("명령문이 하나인 arrow function");

  const f = () => console.log("증괄호 생략 가능");

  const g = () => "중괄호 생략시 값이 리턴됨";

  // 함수 실행
  action1(null, null);
  a(null, null);
  b(null, null, null);
  c();
  d(null);
  e();

  return <div></div>;
}

export default App;
