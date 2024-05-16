import React from "react";
import axios from "axios";

function App(props) {
  function handle200() {
    axios.get("/api/main43/sub1").then((response) => {
      console.log(response);
    });
  }

  function handle400() {
    axios
      .get("/api/main43/sub2")
      .then((response) => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못된 요청입니다.");
        } else if (err.response.status === 500) {
          console.log("서버 오류입니다.");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청입니다.");
        }
      });
  }

  function handle500() {
    axios
      .get("/api/main43/sub6")
      .then((response) => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못된 요청입니다.");
        } else if (err.response.status === 500) {
          console.log("서버 오류입니다.");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청입니다.");
        }
      });
  }

  return (
    <div>
      <button onClick={handle200}> 200번 응답</button>
      <button onClick={handle400}> 400번 응답</button>
      <button onClick={handle500}> 500번 응답</button>
    </div>
  );
}

export default App;
