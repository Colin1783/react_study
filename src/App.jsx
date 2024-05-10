import React from "react";

function MyComp({ name, age, team = "F/A" }) {
  return (
    <div>
      <ul>
        <li>name: {name}</li>
        <li>age: {age}</li>
        <li>team: {team}</li>
      </ul>
    </div>
  );
}
function App(props) {
  return (
    <div>
      <MyComp name="John" age={25} team="A" />
      <MyComp name="Doe" age={30} team="B" />
      <MyComp name="Jane" age={35} />
    </div>
  );
}

export default App;
