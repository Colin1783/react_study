import React from "react";

function App(props) {
  //destructing assignment
  const person = {
    name: "John",
    email: "john@example.com",
    address: "127.0.0.1",
  };

  const { name, email } = person;
  console.log("name", name, "email", email);
  // console.log("address", address);

  const car = {
    model: "genesis",
    company: "Hyundai",
    price: 500,
  };

  const { model, company, color } = car;

  console.log(model);
  console.log(company);
  console.log(color);

  const house = {
    city: "seoul",
    country: "us",
  };

  const { city, country, district = "district9" } = house;
  console.log("city", city);
  console.log(country);
  console.log(district);

  return <div></div>;
}

export default App;
