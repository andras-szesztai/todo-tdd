import { Props } from './types'

function Label({ label, testId, htmlFor }: Props) {
    return (
        <label
            data-testid={testId}
            className="font-semibold text-xl text-primary-dark cursor-pointer select-none"
            htmlFor={htmlFor}
        >
            {label}
        </label>
    )
}

export default Label
