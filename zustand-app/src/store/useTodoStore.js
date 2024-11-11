import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
    persist(
        (set) => ({
            todos: [],
            addTodo: (todoState) => set((state) => ({
                todos: [
                    ...state.todos,
                    {
                        id: getId(),
                        text: todoState,
                        isCompleted: false,
                    }
                ]
            })),
            deleteTodo: (todoId) => set((state) => ({
                todos: state.todos.filter((todo) => todo.id !== todoId)
            })),
            completeTodo: (todoId) => set((state) => ({
                todos: state.todos.map((todo) => {
                    if(todo.id === todoId) {
                        return {
                            ...todo,
                            isCompleted: true,
                        }
                    }
                    return todo;
                })
            }))
        }), { name: 'todo' }
    )
)

let id = 0;
function getId() {
    return id++;
}