import React from "react";

function App(props) {
  // JSON (JavaScript Object Notation) is a lightweight data-interchange format.
  // javascript object의 작성법을 빌린
  // text(문자열) 형식의 데이터

  // JSON 데이터 타입 : string, number, object, array, boolean, null

  // JSON의 property 명은 ""(큰따옴표)로 감싸야 한다.
  // 직렬화(stringify, encode) : JSON 데이터를 문자열로 변환
  // 역직렬화(parse, decode) : 문자열을 JSON 데이터로 변환

  // JSON.stringify 예시:
  const obj = {
    name: "홍길동",
    age: 25,
    isMarried: false,
    hobby: ["독서", "등산"],
  };
  const json =
    '{"name":"홍길동","age":25,"isMarried":false,"hobby":["독서","등산"]}';

  console.log(JSON.stringify(obj) === json); // true

  const obj2 = {
    name: "홍길동",
    age: 25,
    isMarried: false,
    hobby: ["독서", "등산"],
  };
  const json2 = JSON.stringify(obj2);

  console.log(json2); // {"name":"홍길동","age":25,"isMarried":false,"hobby":["독서","등산"]}

  return <div></div>;
}

export default App;
