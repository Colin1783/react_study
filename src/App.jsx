import React from "react";

// props : properties
// <MyButton name="click3" />
// props.name = "click3"

function MyButton(props) {
  return (
    <button
      style={{
        padding: "10px",
        backgroundColor: "red",
        color: "white",
      }}
    >
      {" "}
      {props.name}{" "}
    </button>
  );
}

function App(props) {
  return (
    <div>
      <button>click1</button>
      <br />
      <button>click2</button>
      <br />
      <MyButton name="click3" />
      <br />
      <MyButton name="click4" />
    </div>
  );
}

export default App;
