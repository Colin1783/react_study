import React from "react";

function App(props) {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div>
      <a href="https://www.naver.com" onClick={handleClick}>
        구글
      </a>
      <hr />
      <form action="https://www.google.com" onSubmit={handleClick}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
