import React, { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const content = newTaskContent.trim();
    if (!content) return;
    addNewTask(content);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="New task"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button type="submit" className="addTask">
        Add task
      </Button>
    </StyledForm>
  );
};

export default Form;