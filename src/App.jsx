import React from "react";

function MyComp() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>증가</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp />
    </div>
  );
}

export default App;
