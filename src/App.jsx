import React from "react";
import axios from "axios";

function App(props) {
  const [result, setResult] = React.useState("");

  function handleClick1() {
    axios.get("/api/main42/sub1").then((response) => {
      console.log(response.data);
    });
  }

  function handleClick2() {
    axios.get("/api/main42/sub2").then((response) => {
      setResult(response.data);
    });
  }

  function handleClick3() {
    axios
      .get("/api/main42/sub3")
      .then((response) => console.log(response.data));
  }

  function handleClick4() {
    axios.get("/api/main42/sub4").then((response) => {
      console.log(response.data);
    });
  }

  function handleClick5() {
    axios.get("/api/main42/sub5").then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div>
      <button onClick={handleClick1}>클릭</button>
      <br />
      <button onClick={handleClick2}> 클릭</button>
      <br />
      <p>{result}</p>
      <br />
      <button onClick={handleClick3}>크을릭</button>
      <br />
      <button onClick={handleClick4}>클릭</button>
      <br />
      <button onClick={handleClick5}>클릭5</button>
    </div>
  );
}

export default App;
