function App() {
  //object : {} 안에 property 명: property 값(key:value)
  let a = {};
  let b = { name: "흥민" };
  let c = { address: "신촌", city: "서울", country: "한국" };

  console.log("a", a);
  console.log("b", b);
  console.log("c", c);

  console.log("c city", c.city);
  console.log("c address", c.address);
  console.log("c country", c.country);

  b.city = "런던";
  b.country = "영국";
  console.log("b city", b.city);
  console.log("b country", b.country);

  return <div></div>;
}

export default App;
