import { useState } from 'react'
import classNames from 'classnames'

import { Button } from 'components/atoms/Button'

import { TODO_COMPLETE_BUTTON_TEXT } from './constants'
import { Props } from './types'

function TodoItem({ title, onCompleteClick, isCompleted }: Props) {
    const liStyles = classNames(
        'relative border border-primary-dark rounded-lg p-2 truncate group',
        {
            'bg-transparent border-primary-dark-disabled text-white':
                isCompleted,
            'bg-white border-primary-dark text-primary-dark': !isCompleted,
        }
    )
    const [isFocused, setIsFocused] = useState(false)
    const spanStyles = classNames(
        'absolute transition-opacity -translate-y-1/2 opacity-0 right-2 top-1/2 group-hover:opacity-100',
        { 'opacity-100': isFocused }
    )
    return (
        <li className={liStyles}>
            {title}
            <span className={spanStyles}>
                <Button
                    text={
                        isCompleted
                            ? TODO_COMPLETE_BUTTON_TEXT.unComplete
                            : TODO_COMPLETE_BUTTON_TEXT.complete
                    }
                    onClick={onCompleteClick}
                    size="small"
                    onFocus={() => {
                        setIsFocused(true)
                    }}
                    onBlur={() => {
                        setIsFocused(false)
                    }}
                />
            </span>
        </li>
    )
}

export default TodoItem
