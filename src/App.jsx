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

  function handle401() {
    axios
      .get("/api/main43/sub3")
      .then((response) => {})
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("인증 오류입니다.");
        } else if (err.response.status === 403) {
          console.log("권한 오류입니다.");
        }
      });
  }

  function handle403() {
    axios
      .get("/api/main43/sub4")
      .then((response) => {})
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("인증 오류입니다.");
        } else if (err.response.status === 403) {
          console.log("권한 오류입니다.");
        }
      });
  }

  function handle999() {
    const r = Math.random();
    let path = "";
    if (r < 1 / 3) {
      path = "api/main43/sub1";
    } else if (r < 2 / 3) {
      path = "api/main43/sub3";
    } else {
      path = "api/main43/sub6";
    }
    axios
      .get(path)
      .then(() => {
        console.log("잘 됨");
      })
      .catch((err) => {
        const code = err.response.status;

        switch (code) {
          case 401:
            console.log("인증 오류입니다.");
            break;
          case 500:
            console.log("권한 오류입니다.");
            break;
        }
      })
      .finally(() => {
        console.log("무조건 실행");
      });
  }

  return (
    <div>
      <button onClick={handle200}> 200번 응답</button>
      <button onClick={handle400}> 400번 응답</button>
      <button onClick={handle500}> 500번 응답</button>

      <button onClick={handle200}>200</button>
      <button onClick={handle401}>401</button>
      <button onClick={handle403}>403</button>
      <button onClick={handle999}>999</button>
    </div>
  );
}

export default App;
