import { TEST_ID } from 'constants/testIds'
import { Props } from './types'

function TodoItem({ title }: Props) {
    return (
        <li
            data-testid={TEST_ID.todoItem}
            className="border border-primary-dark rounded-lg p-2 bg-white truncate"
        >
            {title}
        </li>
    )
}

export default TodoItem
