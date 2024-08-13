import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import TableEx from "./TableEx"; // TableEx 컴포넌트 추가

const App = () => {
  return (
    <div>
      <header className="jumbotron">
        <h1>Todo List</h1>
        <p>오늘 할 일을 입력 하세요</p>
      </header>
      {/* 입력 기능 */}
      <Input />
      {/* 목록 출력 기능 */}
      <Output />
      {/* TableEx 컴포넌트 추가 */}
      <TableEx />
    </div>
  );
};

export default App;
