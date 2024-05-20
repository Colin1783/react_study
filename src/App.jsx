import React from "react";

function App(props) {
  const name = ["January", "February", "March", "April", "May"];
  //<li>January</li>..
  // 배열을 map 메소드를 사용해 컴포넌트들을 만들 때,
  // key prop을 사용해서 효율성을 높일 것
  return (
    <div>
      <ul>
        {name.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
