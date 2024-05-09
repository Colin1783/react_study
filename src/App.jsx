function MyComponent() {
  // 최상위 컴포넌트 사용하지 않고 싶을 때 -> fragment 사용
  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Autem, ex sint.</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 한 개임
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Lorem ipsum.</p>
    </div>
  );
}

function MyTag() {
  //jsx 코드가 여러 줄일 때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Impedit, nisi!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComp />
      <MyTag />
      <MyComponent />
    </div>
  );
}

export default App;
