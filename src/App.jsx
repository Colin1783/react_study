import React from "react";

function App(props) {
  // object ({}, [])
  const a = [6, 7, 8];
  const v1 = a[0];
  const v2 = a[1];
  const v3 = a[2];

  console.log(a);
  console.log(v1);
  console.log(v2);
  console.log(v3);

  const [x, y, z] = a;

  //연습
  const b = ["pizza", 3.14, "lunch"];

  const [x1, x2, x3] = b;

  console.log("x1", x1);
  console.log("x2", x2);
  console.log("x3", x3);

  const c = ["son", "lee"];
  const [a1] = c;
  console.log("a1", a1);

  const [b1, b2, b3 = "hwang"] = c;

  console.log("b1", b1);
  console.log("b2", b2);
  console.log("b3", b3);

  // 연습
  const d = ["name", "email", "phone"];

  const [d1, d2, d3, d4 = "city"] = d;
  console.log("d1", d1);
  console.log("d2", d2);
  console.log("d3", d3);
  console.log("d4", d4);

  return <div></div>;
}

export default App;
