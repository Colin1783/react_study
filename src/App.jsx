import React, { useState } from "react";

function App(props) {
  const [name, setName] = useState();
  const [hobby, setHobby] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setHobby(e.target.value)}
          placeholder={"취미"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          placeholder={"주소"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder={"도시"}
        />
      </div>

      <div>
        {name}, {hobby}, {address}, {city}
      </div>
    </div>
  );
}

export default App;
