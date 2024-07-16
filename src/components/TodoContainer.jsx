import { TodoForm } from "./TodoForm"
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import { Todo } from "./Todo"
uuidv4()

function TodoContainer() {
    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        setTodos([...todos, {id:uuidv4(), task:todo,completed: false, isEditing: false }])
        console.log(todos)
    }

    function toggleComplete(id) {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed} : todo))
    }

    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    return (
        <div className="TodoContainer">
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,index) => (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} handleDelete={handleDelete} />
        ))}
        </div>
    )
}

export {TodoContainer}