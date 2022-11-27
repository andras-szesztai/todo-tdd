'use client'

import classNames from 'classnames'

import { Props } from './types'

function Button({ testId, disabled, text, onClick, size = 'medium' }: Props) {
    const cxs = classNames(
        'inline text-white font-medium bg-primary-dark border cursor-pointer select-none border-primary-dark disabled:bg-primary-dark-disabled disabled:cursor-not-allowed focus:outline-none focus:border-accent',
        {
            'text-base p-2 rounded-lg': size === 'medium',
            'text-xs py-1 px-1.5 rounded-md': size === 'small',
        }
    )
    return (
        <button
            className={cxs}
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
