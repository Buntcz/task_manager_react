function Todo({task,toggleComplete,handleDelete,handleEdit}) {
    return (
        <div className="todo">
            <p onClick={() => toggleComplete(task.id)}  className={`${task.completed ? "completed" : "notCompleted"}`}>{task.task}</p>
            <div>
            <button className="deleteBtn" onClick={() => handleDelete(task.id)}>delete</button>
            <button className="editBtn" onClick={() => handleEdit(task.id) }>edit</button>
            </div>
        </div>
    )
}

export {
    Todo
}