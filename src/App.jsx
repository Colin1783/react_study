import React from "react";

function App(props) {
  //destructuring assigment
  // 구조 분해 할당
  // object ({}. [])를 분해해서 할당

  const a = {
    name: "John Doe",
    age: 30,
  };

  const aName = a.name;
  const aAge = a.age;
  console.log("aName", aName);
  console.log("aAge", aAge);

  const { name: bName, age: bAge } = a;
  // const bName = a.name;
  // const bAge = a.Age;
  console.log("bName", bName);
  console.log("age", bAge);

  const { name, age } = a;
  console.log("age", age);
  console.log("Name", name);

  return <div></div>;
}

export default App;
