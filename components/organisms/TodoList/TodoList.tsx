import { TodoItem } from 'components/molecules/TodoItem'
import { TEST_ID } from 'constants/testIds'

import { Props } from './types'

function TodoList({ todoItems, onTodoItemCompleteClick }: Props) {
    const sortedTodoItems = [...todoItems].sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
    return (
        <ul
            data-testid={TEST_ID.todoListContainer}
            className="h-96 w-80 border border-primary-dark rounded-xl p-2 pr-4 overflow-y-auto bg-primary-dark-disabled flex flex-col gap-2"
        >
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
