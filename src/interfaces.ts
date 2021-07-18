export interface ITodo {
    todoText: string
    id: number
    completed: boolean
}
export interface ITodoFormProps {
    addTodo(todoText: string): void
}

export type TTodo = {
    todos: ITodo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}
