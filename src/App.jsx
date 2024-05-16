import React from "react";
import axios from "axios";

function App(props) {
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

  return (
    <div>
      <button onClick={handleClick1}>요청(JSON 데이터 포함)</button>
    </div>
  );
}

export default App;
