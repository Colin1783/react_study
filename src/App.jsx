import React, { useState } from "react";

function MyBox({ color, count, onClick }) {
  return (
    <div
      style={{ border: `2px solid ${color}`, padding: "10px", margin: "10px" }}
    >
      <button onClick={onClick}>up</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [checked, setChecked] = useState(true);
  const [count, setCount] = useState(0);

  function handleUpdateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {checked && (
        <MyBox color={"red"} count={count} onClick={handleUpdateCount} />
      )}
    </div>
  );
}

export default App;
