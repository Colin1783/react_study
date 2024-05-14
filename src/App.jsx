import React, { createContext, useContext, useState } from "react";

const TextContext = createContext("");

function MyInput() {
  const { text, handlerChange } = useContext(TextContext);

  return (
    <div>
      <input type="text" onChange={(e) => handlerChange(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

function MyText() {
  const { text } = useContext(TextContext);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handlerChange(t) {
    setText(t);
  }

  return (
    <TextContext.Provider value={{ text, handlerChange }}>
      <div>
        <MyInput />
        <hr />
        <MyText />
      </div>
    </TextContext.Provider>
  );
}

export default App;
