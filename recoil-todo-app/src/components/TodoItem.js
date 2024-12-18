import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../TodoAtoms'

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue,...arr.slice(index + 1)]
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index),...arr.slice(index + 1)]
}

const TodoItem = ({item}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {...item, isComplete: !item.isComplete});
        setTodoList(newList);
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    }

    const editItemText = (e) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: e.target.value,
        })
        setTodoList(newList)
    }

    return (
        <div>
            <input type='text' value={item.text} onChange={editItemText}/>
            <input 
                type='checkbox' 
                checked={item.isComplete} 
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    )
}


export default TodoItem