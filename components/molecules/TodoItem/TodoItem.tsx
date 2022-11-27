import classNames from 'classnames'
import { Button } from 'components/atoms/Button'
import { TEST_ID } from 'constants/testIds'
import { TODO_COMPLETE_BUTTON_TEXT } from './constants'
import { Props } from './types'

function TodoItem({ title, onCompleteClick, isCompleted }: Props) {
    const cxs = classNames(
        'relative border border-primary-dark rounded-lg p-2  truncate group',
        {
            'bg-transparent border-primary-dark-disabled text-white':
                isCompleted,
            'bg-white border-primary-dark text-primary-dark': !isCompleted,
        }
    )
    return (
        <li data-testid={TEST_ID.todoItem} className={cxs}>
            {title}
            <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                    testId={TEST_ID.todoCompleteButton}
                    text={
                        isCompleted
                            ? TODO_COMPLETE_BUTTON_TEXT.unComplete
                            : TODO_COMPLETE_BUTTON_TEXT.complete
                    }
                    onClick={onCompleteClick}
                    size="small"
                />
            </span>
        </li>
    )
}

export default TodoItem
