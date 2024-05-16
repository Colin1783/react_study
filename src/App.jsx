import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState();

  function handleClick1() {
    const data = {
      name: "홍길동",
      age: 20,
      email: "abc@abcd.net",
      tel: "010-1234-5678",
    };
    // const jsonData = data.stringify(data)

    axios.post("/api/main41/sub1", data);
  }

  function handleClick2() {
    const data = {
      food: ["짜장면", "짬뽕", "탕수육"],
      price: [5000, 6000, 12000],
      calories: [600, 800, 1500],
    };

    axios.post("/api/main41/sub2", data);
  }

  function handleClick3() {
    axios.post("/api/main41/sub3", { name, city });
  }

  return (
    <div>
      <button onClick={handleClick1}>요청(JSON 데이터 포함)</button>
      <hr />
      <button onClick={handleClick2}>요청(JSON 데이터 포함)</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>클릭</button>
      </div>
    </div>
  );
}

export default App;
