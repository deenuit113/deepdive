import React, { useState } from 'react'
import { useTodoStore } from '../store/useTodoStore';

const TodoList = () => {
    const [todoValue, setTodoValue] = useState("");

    const {todos, addTodo, deleteTodo, completeTodo} = useTodoStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoValue);
        setTodoValue("");
    }

    return (
        <div>
            <h3>Todo App</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    id='new-todo'
                    name='newTodo'
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.isCompleted? 'line-through' : 'none'
                            }}
                        >
                            {todo.text}{" "}
                        </span>
                        {
                            !todo.isCompleted ? (
                                <button onClick={() => completeTodo(todo.id)}>v</button>
                            ) : null
                        }
                        <button onClick={() => deleteTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList