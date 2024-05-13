import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState({ name: "son" });

  function updateName() {
    // 상태가 변경되면 컴포넌트가 다시 렌더링됩니다.
    // 새 객체를 만들어서 상태를 변경하면 렌더링이 발생합니다.
    val.name = "lee";
    setVal(val);
  }

  return (
    <div>
      {val.name}
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState({ name: "son" });
  function updateVal() {
    //객체를 복사해서 새 객체를 만들어 써야함
    const newVal = { ...val, name: "lee" };
    setVal(newVal);
  }
  return (
    <div>
      {val.name}
      <button onClick={updateVal}>Update Name</button>
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
