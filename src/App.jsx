import React from "react";

function App(props) {
  const a = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  };

  // 얕은 복사 (Shallow copy)
  const { ...b } = a;
  b.age = 55;

  console.log(a.age, b.age); // 30 55

  b.address.city = "busan";
  console.log(a.address.city); // New York
  console.log(b.address.city); // New York

  // 깊은 복사
  // 얕은 복살흘 여러번 해서 해결
  const { ...c } = a;
  const { ...adress1 } = a.address;
  c.address = adress1;
  c.address.city = "busan";
  a.address.city = "seoul";
  console.log(a.address.city); // seoul
  console.log(c.address.city); // busan

  return <div></div>;
}

export default App;
