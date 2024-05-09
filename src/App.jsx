function App() {
  // javascript review

  //data type
  let a; // undefined
  console.log("a", typeof a);

  let b = "문자열"; //string
  console.log("b", typeof b);

  let c = 3; // number
  console.log("c", typeof c);

  let d = 3.14;
  console.log("d", typeof d);

  let e = true; //boolean
  console.log("e", typeof e);

  let f = {}; // object
  let g = []; // object
  console.log("f", typeof f);
  console.log("g", typeof g);

  let h = function () {};
  console.log("h", typeof h);
  h = {};
  console.log("h", typeof h);

  return <div></div>;
}

export default App;
