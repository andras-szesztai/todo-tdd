import { Props } from './types'

function Button({ testId, disabled, text }: Props) {
    return (
        <button
            className="inline font-medium p-2 rounded-lg text-white bg-primary-dark border cursor-pointer select-none border-primary-dark disabled:bg-primary-dark-disabled disabled:cursor-not-allowed"
            type="button"
            data-testid={testId}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button
