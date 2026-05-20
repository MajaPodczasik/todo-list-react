import React, { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const content = newTaskContent.trim();
    if (!content) return;
    addNewTask(content);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
    <input
    value={newTaskContent}
      className="form__input"
      placeholder="New task"
      onChange={({target}) => setNewTaskContent(target.value)}
    />
    <button type="submit" className="addTask">
      Add task
    </button>
    </form>
)
};

export default Form;