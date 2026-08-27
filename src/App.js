import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import useTasks from "./hooks/useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title="To Do List" />
      <Section title="Add new task" 
      body={<Form addNewTask={addNewTask} />} 
      />

      <Section
        title="To do List"
        body={
          <Tasks
          tasks={tasks} 
          hideDone={hideDone} 
          removeTask={removeTask} 
          toggleTaskDone={toggleTaskDone}
          />
      }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}
 


export default App;
