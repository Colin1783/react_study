import React from "react";

function MyButton(props) {
  return <button>{props.children}</button>;
}

function App(props) {
  return (
    <div>
      <MyButton>클릭1</MyButton>
      <MyButton>클릭2</MyButton>
    </div>
  );
}

export default App;
