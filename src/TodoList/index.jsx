import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./list";
import * as TYPES from "../constants/actionTypes";
import "./todolist.css";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);

  const addTaskInput = useRef();
  const dispatch = useDispatch();

  const addTask = () => {
    const newTask = addTaskInput.current.value;
    if (newTask && !tasks.some((task) => task.text === newTask)) {
      const newTaskObj = {
        text: newTask,
        done: false,
      };
      dispatch({
        type: TYPES.ADD_TASK,
        payload: newTaskObj,
      });
      addTaskInput.current.value = "";
      addTaskInput.current.focus();
    }
  };

  const handleKey = ({ keyCode, target }) => {
    if (keyCode === 13) {
      addTask();
    } else {
      if (!tasks.some((task) => task.text === target.value)) {
        addTaskInput.current.classList.remove("invalid");
      } else {
        addTaskInput.current.classList.add("invalid");
      }
    }
  };

  return (
    <div className="main">
      <div className="todo">
        <div className="todo-header">
          <h1>Today</h1>
        </div>
        <div className="todo-body">
          <List tasks={tasks} />
        </div>
        <div className="todo-form">
          <input
            ref={addTaskInput}
            type="text"
            placeholder="New Todo..."
            onKeyUp={handleKey}
          />
          <button onClick={addTask}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
