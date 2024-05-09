function App() {
  const a = 7;
  const b = 3;

  // && : 양 변이 모두 true일 때만 결과가 true, 나머지는 false

  const c = a > 10 && b > 0;
  const d = a < 10 && b > 0;

  console.log("c", c);
  console.log("d", d);

  // || : 양 변이 모두 false일 때만 결과가 false, 나머지는 true
  const e = a > 10 || b > 0;
  const f = a < 5 || b > 10;

  console.log("e", e);
  console.log("f", f);

  // && : 왼쪽 항이 true 면 오른쪽 값 반환
  const g = a < 10 && "hello";
  const h = a < 5 && "hi";

  console.log("g", g);
  console.log("h", h);

  // && : 왼쪽 항이 false 면 오른쪽 값 반환

  const i = a < 10 || "greeting";
  const j = a < 5 || "안녕";

  console.log("i", i);
  console.log("j", j);

  return <></>;
}

export default App;
