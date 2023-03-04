import Task from "./tasks";
import "./todolist.css";

const List = ({ tasks, setTasks }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, taskIndex) => {
        return (
          <Task
            key={taskIndex}
            taskId={taskIndex}
            task={task}
            setTasks={setTasks}
          />
        );
      })}
    </ul>
  );
};

export default List;
