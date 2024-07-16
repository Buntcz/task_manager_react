import { useState } from "react"

function TodoForm({addTodo}) {
   const[value,setValue] = useState("")

  function handleSubmit(e) {
    if(value === '') {
        e.preventDefault()
        return
    }
    e.preventDefault();
    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <input className="addTask" type="text" value={value}  placeholder="What's are you doing today?" onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="TaskBtn">Add Task</button>
    </form>
  )
}

export {TodoForm}