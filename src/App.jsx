// built-in component : html의 기본 요소, 소문자로 시작
// component : 직접 만든 요소 (태그), 대문자로 시작

// component는 return을 가진 함수
function MyComponent() {
  // return : 화면에 출력할 코드 (jsx code)
  return <div>hello component</div>;
}

function MyComp() {
  // jsx 코드: <div></div>
  const myElem = <h1>hi JSX</h1>;

  return myElem;
}

function App() {
  // component 사용 시 종료 태그 생략할 수 없음
  return (
    <>
      <div>
        <h1>hello react</h1>
        <h2>하이 리액트</h2>
        <h3>안녕 리액트</h3>
        <p>Lorem ipsum dolor.</p>
        <MyComponent />
        <MyComp />
        <hr /> {/* <hr> 은 불가능 */}
      </div>
    </>
  );
}

export default App;
