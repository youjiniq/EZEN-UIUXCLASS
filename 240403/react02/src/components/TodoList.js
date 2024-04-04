import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h4>Todo List 💭</h4>
      <input className="searchbar" placeholder="Find your List !" />
      <div className="list_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
