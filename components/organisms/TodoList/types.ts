import { TTodoItem } from 'components/molecules/TodoItem'

export interface Props {
    todoItems: TTodoItem[]
    onTodoItemCompleteClick: (id: string) => void
}
