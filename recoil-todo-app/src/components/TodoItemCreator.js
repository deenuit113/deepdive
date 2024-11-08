import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../TodoAtoms';

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList, 
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ]);
        setInputValue('');
    };

    return (
        <div>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

let id = 0;
function getId() {
    id += 1;
    return id;
}

export default TodoItemCreator