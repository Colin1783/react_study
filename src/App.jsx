import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "john@example.com",
    password: "1234567890",
  };

  return (
    <div>
      name: {obj.name}
      <br />
      age: {obj.age}
      <br />
      email: {obj.email}
      <br />
      password: {obj.password}
    </div>
  );
}

export default App;
