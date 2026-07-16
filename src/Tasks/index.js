import React from "react";
import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Content done={task.done}>
          {task.content}
        </Content>
        <div className="tasks__button">
          <Button
            toggleDone={task.done}
            onClick={() => toggleTaskDone(task.id)}
          >
            {task.done ? "✓" : "✓"}
          </Button>
          <Button
            onClick={() => removeTask(task.id)}
          >
            🗑️
          </Button>
        </div>
      </Item>
    ))}
  </List>
);

export default Tasks;
