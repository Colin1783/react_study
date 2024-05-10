import React from "react";

function MyInfo({ name, age, email, country }) {
  return (
    <div>
      <ul>
        <li>name: {name}</li>
        <li>age: {age}</li>
        <li>email: {email}</li>
        <li>country: {country}</li>
      </ul>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyInfo name="John" age={30} email="1234@abcd.com" country="usa" />
    </div>
  );
}

export default App;
