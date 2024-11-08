import { atom, selector } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: [],
});

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All'
});

const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const list = get(todoListState);
    }
})