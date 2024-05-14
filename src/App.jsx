import React, { useState } from "react";

function MyBox({ color }) {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ border: `2px solid ${color}`, padding: "10px", margin: "10px" }}
    >
      <button onClick={(e) => setCount(count + 1)}>up</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
      {checked && <MyBox color={"red"} />}
    </div>
  );
}

export default App;
