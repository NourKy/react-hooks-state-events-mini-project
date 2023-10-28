import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[arrayTask,setArrayTak]=useState(TASKS);
  function handleTasksCategories(selectedCategory) {
    console.log(selectedCategory);
    if (selectedCategory === "All") {
      setArrayTak(TASKS); // Set the state back to the original list
    } else {
      const newTaskList = TASKS.filter((task) => {
        return task.category === selectedCategory;
      });
      setArrayTak(newTaskList); // Update the state with the filtered list
    }
  }
  function handleRemoveTask(taskText) {
    // Filter and update the tasks state in the parent component
    const updatedTasks = arrayTask.filter((task) => task.text !== taskText);
    setArrayTak(updatedTasks);
  }
  function handleAddTasks(objTask)
  {
    const updatedTasks=[...arrayTask,objTask];
    setArrayTak(updatedTasks);

  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setTasksCategories={handleTasksCategories}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTasks}/>
      <TaskList tasks={arrayTask} onRemove={handleRemoveTask}/>
    </div>
  );
}

export default App;
