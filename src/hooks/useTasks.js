import { useEffect, useState } from "react";

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
};

const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((currentTasks) => currentTasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks((currentTasks) => currentTasks.map((task) => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        content,
        done: false,
        id: currentTasks.length === 0
          ? 1
          : currentTasks[currentTasks.length - 1].id + 1,
      },
    ]);
  };

  return {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  };
};

export default useTasks;