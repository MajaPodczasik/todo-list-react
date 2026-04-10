import React from "react";
import "./style.css";

const Tasks = (props) => {
  console.log("Tasks data:", props.tasks, "hideDone:", props.hideDone);
  const tasksToRender = props.hideDone
    ? props.tasks.filter((task) => !task.done)
    : props.tasks;

  return (
    <ul className="taskList">
      {tasksToRender.map((task, index) => {
        console.log("Task:", task, "done:", task.done);
        return (
          <li key={task.id || index} className="todo-item">
            <span className={`todo-item__text${task.done ? " doneTask" : ""}`}>
              {task.content}
            </span>
            <div className="todo-item__actions">
              <button className="taskDone">✓</button>
              <button className="taskRemove">remove</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
