import React from "react";

function MyComp({ name, age, someProp, otherProp }) {
  console.log("name", name);
  console.log("age", age);
  console.log("someProp", someProp); // default = true
  console.log("otherProp", otherProp); // 값 부여 가능(true or false)
}

function App(props) {
  return (
    <div>
      <MyComp name="John" age={30} someProp otherProp={false} />
    </div>
  );
}

export default App;
