import React from "react";
import axios from "axios";

function App(props) {
  // json 데이터 타입 : object, array, string, number, boolean, null

  function handleClick1() {
    const data = {
      name: "홍길동",
      age: 20,
      married: false,
      address: {
        address1: "서울시",
        address2: "강남구",
        address3: "역삼동",
      },
      item: ["item1", "item2", "item3"],
      money: null,
    };

    axios.post("/api/main41/sub5", data);
  }

  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
    </div>
  );
}

export default App;
