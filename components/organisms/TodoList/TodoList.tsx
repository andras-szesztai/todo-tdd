import { TodoItem } from 'components/molecules/TodoItem'

import { Props } from './types'

function TodoList({ todoItems, onTodoItemCompleteClick }: Props) {
    const sortedTodoItems = [...todoItems].sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
    return (
        <ul className="flex flex-col gap-2 p-2 pr-4 overflow-y-auto border h-96 w-80 border-primary-dark rounded-xl bg-primary-dark-disabled">
            {sortedTodoItems.map((todoItem) => (
                <TodoItem
                    key={todoItem.id}
                    title={todoItem.title}
                    isCompleted={todoItem.isCompleted}
                    onCompleteClick={() => {
                        onTodoItemCompleteClick(todoItem.id)
                    }}
                />
            ))}
        </ul>
    )
}

export default TodoList
