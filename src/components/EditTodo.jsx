import { useState } from "react"

function EditTodo({editTodo, task}) {
   const[value,setValue] = useState(task.task)

  function handleSubmit(e) {

    e.preventDefault();
    editTodo(value,task.id)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <input className="addTask" type="text" value={value}  placeholder="Update task" onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="TaskBtn">Update task</button>
    </form>
  )
}

export {EditTodo}