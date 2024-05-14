import React, { createContext, useContext, useState } from "react";

// eslint-disable-next-line no-unused-vars
const TextContext = createContext("");

function MyInput() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => textHandler.updateText(e.target.value)}
      />
      <p>{textHandler.text}</p>
    </div>
  );
}

function MyText() {
  const textHandler = useContext(TextContext);

  return (
    <div>
      <p>{textHandler.text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(t) {
    setText(t);
  }

  return (
    <TextContext.Provider value={{ text, updateText: handleUpdateText }}>
      <div>
        <MyInput />
        <hr />
        <MyText />
      </div>
    </TextContext.Provider>
  );
}

export default App;
