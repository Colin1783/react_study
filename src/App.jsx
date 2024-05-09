function App() {
  // {} 사용해서 js 코드 작성 가능

  const v1 = 5;
  const v2 = 7;

  function someAction() {
    return "손흥민";
  }

  function square(p) {
    return p * p;
  }
  return (
    <>
      <p>
        {2} + {3} = {2 + 3}
      </p>
      <p>
        {v1} + {v2} = {v1 + v2}
      </p>
      <p>
        {v1} - {v2} = {v1 - v2}
      </p>
      <p>
        {v1} * {v2} = {v1 * v2}
      </p>
      <p>{someAction()}</p>
      <p>{square(5)}</p>
      <p>{v1 < 10 ? "10보다 작다" : "10보다 크다"}</p>
      <p>{v1 < 3 ? "3보다 작다" : "3보다 크다"}</p>
    </>
  );
}

export default App;
