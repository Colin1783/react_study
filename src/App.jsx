import React from "react";

function MyComponent(props) {
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComponent
        // prop의 값 타입은 javascript 값 타입
        // {}에 값 입력(String은 생략 가능)
        font={"bold"}
        name={"son"}
        street="seoul"
        age={3.14}
        address={{ city: "seoul", country: "us" }}
        married={true}
        action={function () {
          console.log("hello");
        }}
        someAction={() => console.log("someAction")}
      />
    </div>
  );
}

export default App;
