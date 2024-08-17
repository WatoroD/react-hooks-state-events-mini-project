import React from "react";
import Task from './Task'
function TaskList({tasks, onDeleteTask}) {
  function onDelete(taskId){
    const updatedTasks= tasks.filter(task=>
      task.text !== taskId.text)
      onDeleteTask(updatedTasks)
  }
  const displayAllTasks= tasks.map((task,index)=>{
    return <Task
            key={index}
            text={task.text}
            category={task.category}
            onDelete={()=>onDeleteTask(task.index)}/>
  }
  )
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayAllTasks}
    </div>
  );
}

export default TaskList;