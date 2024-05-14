import React, { useState } from "react";

function MyBox({ color, count, setCount }) {
  return (
    <div
      style={{ border: `2px solid ${color}`, padding: "10px", margin: "10px" }}
    >
      <button onClick={() => setCount(count + 1)}>up</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [checked, setChecked] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {checked && <MyBox color={"red"} count={count} setCount={setCount} />}
    </div>
  );
}

export default App;
