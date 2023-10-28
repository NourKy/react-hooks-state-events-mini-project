import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [taskDetailts,setTaskDetails]=useState();
  const [categorySelected,setCategorySelected]=useState();
  function addTask(e)
  {
    e.preventDefault();
    
    const objTask={
      text: taskDetailts,
      category: categorySelected,
    }
    onTaskFormSubmit(objTask);
  }
  
  return (
    <form className="new-task-form" onSubmit={addTask}>
      <label>
        Details
        <input type="text" name="text" onChange={(event)=>setTaskDetails(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(event)=>setCategorySelected(event.target.value)}>
        {categories.map((category)=>
        <option key={category}>{category}</option>)
        }
         
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
