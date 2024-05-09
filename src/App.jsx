import React from "react";

function App(props) {
  const a = ["흥민", "강인", "희찬"];
  const b = a.map(function (item) {
    return item + "선수";
  });

  return (
    <>
      <div>{a}</div>
      <div>
        {a[0]}
        {a[1]}
        {a[2]}
      </div>
      <div>{b}</div>
      <div>
        {b[0]}
        {b[1]}
        {b[2]}
      </div>
      <div>
        {a.map((item) => (
          <li>{item} 선수</li>
        ))}
      </div>
    </>
  );
}

export default App;
