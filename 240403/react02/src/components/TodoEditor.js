import "./TodoEditor.css";

const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <h4>Add New Todo ✅</h4>
      <div className="editor_wrapper">
        <input placeholder="New Todo..." />
        <button>Add</button>
      </div>
    </div>
  );
};

export default TodoEditor;
