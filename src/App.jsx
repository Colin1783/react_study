import React from "react";

function App(props) {
  // 나머지 모두 문법으로 객체 복사

  const a = {
    name: "son",
    age: 33,
    city: "london",
  };

  const b = a;
  b.age = 44;
  console.log(a.age); // 44
  console.log(b.age); // 44
  // a와 b는 같은 객체를 참조하고 있기 때문에 b.age를 수정하면 a.age도 수정된다.

  const c = {
    name: a.name,
    age: a.age,
    city: a.city,
  };

  c.age = 55;
  console.log(a.age); // 44
  console.log(c.age); // 55

  // 객체를 복사할 때는 객체의 프로퍼티를 하나하나 복사해야 한다.

  const { ...d } = a;
  d.age = 66;
  console.log(a.age); // 44
  console.log(d.age); // 66

  // 연습
  const e = {
    name: "kim",
    age: 22,
    city: "seoul",
    salary: 3000,
    married: false,
  };

  const { ...f } = e;

  e.city = "busan";
  console.log("e", e);
  console.log("f", f);

  return <div></div>;
}

export default App;
