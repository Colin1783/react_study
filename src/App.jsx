function App() {
  // &&, ||
  // falsy, truthy
  // falsy : "", null, 0, undefined, false, NaN...

  const a = 0;
  if (a) {
    console.log("a는 참");
  } else {
    console.log("a는 거짓");
  }
  // truthy : falsy 제외
  // &&, || 와 조합
  let b = 0; // or 0
  let c = b && "값이 있음"; //

  console.log("c", c);

  let d = b || "값이 없음";
  console.log("d", d);

  return <div></div>;
}

export default App;
