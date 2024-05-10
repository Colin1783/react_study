import React from "react";

function MyButton({ name, onClick }) {
  return <button onClick={onClick}>{name}</button>;
}

function App(props) {
  return (
    <div>
      <MyButton name={"#출력"} onClick={() => console.log("#")} />
      <br />
      <MyButton name={"!출력"} onClick={() => console.log("!")} />
    </div>
  );
}

export default App;
