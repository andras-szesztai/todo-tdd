import { Props } from './types'

function Input({ placeholder, testId, value, id }: Props) {
    return (
        <input
            id={id}
            className="w-60 rounded-lg border font-medium border-primary-dark focus:outline-none focus:border-accent text-base p-2 placeholder-primary-dark-disabled text-primary-dark"
            data-testid={testId}
            placeholder={placeholder}
            value={value}
        />
    )
}

export default Input
