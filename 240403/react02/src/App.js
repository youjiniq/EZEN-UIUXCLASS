import "./App.css";
import Header from "./components/Header.js";
import TodoEditor from "./components/TodoEditor.js";
import TodoList from "./components/TodoList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;
