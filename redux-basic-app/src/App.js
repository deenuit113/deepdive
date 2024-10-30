import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App({ onIncrement, onDecrement }) {
    const [todoValue, setTodoValue] = useState('');
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter);
    const todos = useSelector((state) => state.todos);
    const posts = useSelector((state) => state.posts);

    const fetchPosts = () => {
        return async function fetchPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch({ type: 'FETCH_POSTS', payload: data });
        }
    }

    useEffect(() => {
        dispatch(fetchPosts2());
    },[])

    const fetchPosts2 = () => async (dispatch, getState) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        dispatch({ type: 'FETCH_POSTS', payload: data });
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text: todoValue});
        setTodoValue('');
    }

    return (
        <div className="App">
            {/* Clicked: {value} times */}
            {counter}
            <button onClick={onIncrement}>
                +
            </button>
            <button onClick={onDecrement}>
                -
            </button>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <input type="submit"/>
            </form>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
