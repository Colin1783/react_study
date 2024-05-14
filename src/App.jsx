import React, { useState } from "react";

function MyBox({ color }) {
  const [num, setNum] = useState(0);

  return (
    <div>
      <div style={{ border: `5px solid ${color}` }}>
        <button onClick={(e) => setNum(num + 1)}>증가</button>
        <p>{num}</p>
      </div>
    </div>
  );
}

function App(props) {
  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        checked={view1}
        onChange={(e) => setView1(e.target.checked)}
      />
      {view1 && <MyBox color={"blue"} />}
      <hr />
      <div>
        <input
          type="checkbox"
          checked={view1}
          onChange={(e) => setView2(e.target.checked)}
        />
        {view2 && <MyBox color={"red"} />}
      </div>
    </div>
  );
}

export default App;
