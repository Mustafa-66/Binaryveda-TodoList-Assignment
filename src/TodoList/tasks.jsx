import "./todolist.css";
import { useSelector, useDispatch } from "react-redux";
import * as TYPES from "../constants/actionTypes";

const Task = ({ taskId, task }) => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const toggleTask = () => {
    const doneStatus = !task.done;
    const newTaskObj = tasks.map((taskItem, taskIndex) => {
      if (taskIndex === taskId) {
        return {
          text: task.text,
          done: doneStatus,
        };
      }
      return taskItem;
    });
    console.log(newTaskObj);
    dispatch({
      type: TYPES.ADD_TASK,
      payload: newTaskObj,
    });
  };

  const prefixClass = "task-item";
  const doneClass = task.done ? " done" : "";

  return (
    <li className={prefixClass + doneClass}>
      <div className={prefixClass + "-infos"}>
        <label className={prefixClass + "-checkbox"}>
          <input type="checkbox" onChange={toggleTask} checked={task.done} />
        </label>
        <div className={prefixClass + "-text"}>{task.text}</div>
      </div>
    </li>
  );
};

export default Task;
