import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "Learn React", done: true },
  { id: 2, content: "Build a todo app", done: false },
];
const hideDoneTasks = false;

function App() {
  return (
      <Container>
        <Header title="To Do List" />
        <Section title="Add new task" body={<Form />} />

        <Section
          title="To do List"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
        />
      </Container>
  );
}

export default App;
