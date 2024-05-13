import React from "react";

function App(props) {
  const [text, setText] = React.useState("");

  const isTooLong = text.length > 10;

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
      {isTooLong && <p>Text is too long!</p>}
    </div>
  );
}

export default App;
