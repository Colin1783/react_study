import React from "react";

function MyComp(props) {
  const [val1, setVal1] = React.useState(0);

  let val2 = 0;

  function updateVal1() {
    setVal1(val1 + 1);
  }

  function updateVal2() {
    val2++;
  }

  console.log("다시 호출됨");

  return (
    <div>
      <button onClick={updateVal1}>val1 {val1}</button>
      <button onClick={updateVal2}>val2 {val2}</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp></MyComp>
    </div>
  );
}

export default App;
