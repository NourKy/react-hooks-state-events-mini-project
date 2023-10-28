import React from "react";
import Task from "./Task.js";

function TaskList({tasks, onRemove}) {
  console.log(tasks);
 
  return (
    <div className="tasks">
      {tasks.map((task,index)=>
    <Task key={index} category={task.category} text={task.text}  onRemove={() => onRemove(task.text)}/>)
    }
      
    </div>
  );
}

export default TaskList;
