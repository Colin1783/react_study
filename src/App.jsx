import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component mounted"); // 새로고침할 때(mount)마다 실행
  }, []);

  useEffect(() => {
    console.log("count updated"); // count가 업데이트 될 때마다 실행
    //useEffect 내에서 dependency를 조작하면 무한루프에 빠질 수 있음
    //setCount(count + 1); // 무한루프
  }, [count]);

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
