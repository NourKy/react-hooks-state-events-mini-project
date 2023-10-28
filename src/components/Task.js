import React from "react";

function Task({category,text,onRemove}) {
  function deleteTask(event)
  {
    onRemove(event.target.value);

  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" value={text}onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
