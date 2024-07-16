import { TodoForm } from "./TodoForm"
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import { Todo } from "./Todo"
import {EditTodo} from './EditTodo'
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

    function handleEdit(id) {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing 
        } : todo))
    }

    function editTask(task, id) {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo,task,isEditing: !todo.isEditing
        } : todo))
    }
    
    return (
        <div className="TodoContainer">
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,index) => (
            todo.isEditing ? (
               <EditTodo key={uuidv4()} editTodo={editTask} task={todo}/>
            ) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit} />
            )
        ))}
        </div>
    )
}

export {TodoContainer}