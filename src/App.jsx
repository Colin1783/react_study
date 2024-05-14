import React from "react";

function App(props) {
  function handleClick1() {
    axios.get("/path1");
  }

  function handleClick2() {
    axios.get("/path1", {
      param: {
        city: "Seoul",
        address: "Gangnam",
      },
    });
  }

  function handleClick3() {
    const params = new URLSearchParams();
    params.append("name", "Alice");
    params.append("age", 20);
    axios.get("/path1" + params.toString());
  }

  return (
    <div>
      <div>
        <button onClick={handleClick1}>/path1 get 요청</button>
      </div>
      <div>
        <button onClick={handleClick2}>/path1 get 요청 city, address</button>
      </div>
      <div>
        <button onClick={handleClick3}>/path1 get 요청 name, age</button>
      </div>
    </div>
  );
}

export default App;
