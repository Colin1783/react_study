import React from "react";

function MyComp(props) {
  return (
    <div>
      props.name: {props.name}
      <br />
      props.age: {props.age}
      <br />
      props.address: {props.address}
      <br />
      props.city: {props.city}
      <br />
      props.country: {props.country}
    </div>
  );
}

function App(props) {
  return (
    <div id={""}>
      <MyComp name="son" age={33} address="seoul" />
      <MyComp city="busan" country="korea" />
    </div>
  );
}

export default App;
