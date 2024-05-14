import React, { createContext, useContext, useState } from "react";

// This is a simple example of passing data deeply with props.
//context
// https://react.dev/learn/passing-data-deeply-with-context

const MessageContext = createContext("");

function MyBox() {
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}

function MySection() {
  return <MyBox />;
}

function MyContainer() {
  return <MySection />;
}

function App(props) {
  const [message, setMessage] = useState("");
  return (
    <MessageContext.Provider value={message}>
      <div>
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <p>{message}</p>
        <hr />
        <MyContainer />
      </div>
    </MessageContext.Provider>
  );
}

export default App;
