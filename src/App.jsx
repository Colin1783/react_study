import React from "react";

function App(props) {
  function handleLinkClick(e) {
    e.preventDefault();
  }

  function handleSubmitClick(e) {
    e.preventDefault();
  }

  return (
    <div>
      <a
        href="https://www.naver.com"
        target={"_blank"}
        onClick={handleLinkClick}
      >
        {" "}
        네이버{" "}
      </a>
      <hr />
      <form action="https://www.naver.com" onSubmit={handleSubmitClick}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
