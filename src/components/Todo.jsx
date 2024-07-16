function Todo({task,toggleComplete,handleDelete}) {
    return (
        <div className="todo">
            <p onClick={() => toggleComplete(task.id)}  className={`${task.completed ? "completed" : " "}`}>{task.task}</p>
            <div>
            <button className="deleteBtn" onClick={() => handleDelete(task.id)}>delete</button>
            <button className="editBtn">edit</button>
            </div>
        </div>
    )
}

export {
    Todo
}