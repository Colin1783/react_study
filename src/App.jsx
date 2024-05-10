import React from "react";

function App(props) {
  // object ({},[])
  const a = [6, 7, 8];
  const [b, c, d] = a;
  console.log(b); // 6
  console.log(c); // 7
  console.log(d); // 8

  // 나머지 모두
  const e = [6, 7, 8, 9, 10];
  const [f, g, ...h] = e;
  console.log(f); // 6
  console.log(g); // 7
  console.log(h); // [8, 9, 10]
  console.log(h[0]); // 8
  console.log(h[1]); // 9
  console.log(h[2]); // 10

  return <div></div>;
}

export default App;
