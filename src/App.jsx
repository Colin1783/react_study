import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    axios.post("/api/someurl", { data: "some data" });
  }

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }

  function handleClickButton4() {
    axios.post("/api/someurl2", { data: "some data" });
  }

  function handleClickButton5() {
    const qs = new URLSearchParams({
      param1: "value1",
      param2: "value2",
    }).toString();

    axios.get("/api/someurl3?" + qs);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      <hr />
      <button onClick={handleClickButton3}>get 요청2</button>
      <button onClick={handleClickButton4}>post 요청2</button>
      <hr />
      <button onClick={handleClickButton5}>get 요청 with queryString</button>
    </div>
  );
}

export default App;
