import React, { useState } from "react";

function MyBox() {
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyBox />
      <hr />
      <MyBox />
    </div>
  );
}

export default App;
