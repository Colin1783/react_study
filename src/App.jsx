import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("api/main43/sub1").then((response) => {
      console.log("200응답");
    });
  }

  function handleClick400() {
    axios
      .get("api/main43/sub2")
      .then((response) => console.log("400응답"))
      .catch(() => console.log("catch의 메소드, 400응답"));
  }

  return (
    <div>
      <button onClick={handleClick200}> 200 응답</button>
      <button onClick={handleClick400}> 400 응답</button>
    </div>
  );
}

export default App;
