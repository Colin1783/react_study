function App() {
  // const, let 중에 사용
  const myTag = <h1>hello</h1>;
  const val1 = "흥민";
  const val2 = 3.14;
  const val3 = 456;
  const val4 = true;
  const val5 = false;
  const val6 = null;
  let val7;
  const val8 = [2, 3, 4, 5, 6, 7, 8, 9];
  const val9 = { name: "흥민", age: 32 };

  //{} : jsx 내에서 js 코드 사용
  return (
    <>
      <p>
        {val1} 선수는 주급이 {val3}억이다.
      </p>
      <div>{val1}</div>
      <div>{val2}</div>
      <div>{val3}</div>
      <div>{myTag}</div>
      <div>{val4}</div>
      <div>{val5}</div>
      <div>{val6}</div>
      <div>{val7}</div>
      <div>{val8}</div>
      <div>
        {val9.name}, {val9.age}
      </div>
    </>
  );
}

export default App;
