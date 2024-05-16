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

  function handleClickButton6() {
    const params = new URLSearchParams({
      id: "5",
      city: "seoul",
      country: "korea",
    });

    axios.post("/api/someurl3?" + params.toString());
  }

  function handleClickButton7() {
    axios.get("/api/someurl4", {
      params: {
        name: "name",
        age: 20,
      },
    });
  }

  function handleClickButton8() {
    axios.post("/api/someurl4", { name: "name", age: 20 });
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
      <button onClick={handleClickButton6}>post 요청 with data</button>
      <hr />
      <button onClick={handleClickButton7}>get 요청 with queryString2</button>
      <button onClick={handleClickButton8}>post 요청 with data2</button>
    </div>
  );
}

export default App;
