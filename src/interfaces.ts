export interface ITodo {
    text: string
    id: number
    completed: boolean
}
export interface ITodoFormProps {
    addTodo(text: string): void
}

export type TTodo = {
    todos: ITodo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}
