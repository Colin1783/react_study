import React from "react";

function MyComponent({ headStyle, bodyStyle }) {
  return (
    <div>
      <h1 style={headStyle}>Hello, World!</h1>
      <p style={bodyStyle}>This is a simple component.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComponent
        headStyle={{
          padding: "5px",
          border: "1px solid black",
          padding: "10px",
        }}
      />
      <MyComponent
        bodyStyle={{
          margin: "5px",
          border: "1px dotted skyblue",
          color: "red",
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default App;
