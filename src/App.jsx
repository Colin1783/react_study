import React from "react";
// style props
// style={{}} : style props 값은 객체여야 합니다.

function App(props) {
  return (
    <div>
      <div
        style={{
          color: "blue",
          padding: "20px",
          border: "1px dashed black",
          backgroundColor: "yellow",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </div>
  );
}

export default App;
