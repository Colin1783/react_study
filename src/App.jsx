import React from "react";
import axios from "axios";

function App(props) {
  function handleClck() {
    console.log("clicked");
    // get request
    // 첫번째 인자로 url을 받고, 두번째 인자로 옵션을 받는다.
    axios.get("someurl");

    //post request
    // 첫번째 인자로 url을 받고, 두번째 인자로 data를 받는다.
  }

  function handleClick2() {
    const qs = "name=son&age=30&city=서울";
    console.log("clicked2");
    axios.get("/path?" + qs);
  }

  function handleClick3() {
    const qs = new URLSearchParams();
    qs.append("name", "son");
    qs.append("age", 30);
    qs.append("city", "서울");
    // axios.get("/path3?" + qs.toString());
    axios.get("/path4?", { params: qs });
  }

  return (
    <div>
      <div>
        <button onClick={handleClck}>click</button>
      </div>
      <div>
        <button onClick={handleClick2}>get 요청 with query string</button>
      </div>
      <div>
        <button onClick={handleClick3}>get 요청 with query string</button>
      </div>
    </div>
  );
}

export default App;
