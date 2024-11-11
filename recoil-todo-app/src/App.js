import logo from './logo.svg';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from './TodoAtoms';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import { currentUserNameQuery } from './UserAtoms';

function App() {

    const todoList = useRecoilValue(filteredTodoListState);
    const userName = useRecoilValue(currentUserNameQuery);
    return (
        <div>
            {userName}
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
            {
                todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem}/>
                ))
            }

        </div>
    );
}

export default App;
