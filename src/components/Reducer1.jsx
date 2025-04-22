import { useReducer } from "react";

const initialState = {
  todos: [],
  inputValue: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
        inputValue: "",
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "UPDATE_INPUT":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.inputValue.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: state.inputValue,
      });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          value={state.inputValue}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_INPUT",
              payload: e.target.value,
            })
          }
          style={{ padding: "8px", marginRight: "8px" }}
          placeholder="Add a new task"
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Add Todo
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "8px 0",
              padding: "8px",
              background: "#f5f5f5",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <span
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id,
                })
              }
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: todo.id,
                })
              }
              style={{
                padding: "4px 8px",
                background: "#ff4444",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
