import React from "react";

function MyComponent({ headColor, bodyColor }) {
  return (
    <div>
      <h1 style={{ color: headColor }}>Lorem.</h1>
      <p style={{ color: bodyColor }}>Lorem ipsum dolor.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComponent headColor="red" bodyColor="blue" />
      <MyComponent headColor="green" bodyColor="purple" />
    </div>
  );
}

export default App;
