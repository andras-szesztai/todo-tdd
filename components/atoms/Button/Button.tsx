'use client'

import { Props } from './types'

function Button({ testId, disabled, text, onClick }: Props) {
    return (
        <button
            className="inline font-medium p-2 rounded-lg text-white bg-primary-dark border cursor-pointer select-none border-primary-dark disabled:bg-primary-dark-disabled disabled:cursor-not-allowed focus:outline-none focus:border-accent"
            type="button"
            data-testid={testId}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
