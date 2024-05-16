import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    axios.post("/api/someurl", { data: "some data" });
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
    </div>
  );
}

export default App;
