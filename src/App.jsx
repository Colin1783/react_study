import React, { useState } from "react";

function App(props) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <button onClick={() => setList([...list, input])}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
