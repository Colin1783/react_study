import React from "react";

function App(props) {
  const foodList = ["pizza", "burger", "noodle", "coffee"];

  return (
    <div>
      <ul>
        {foodList.map((item) => (
          <li> {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
