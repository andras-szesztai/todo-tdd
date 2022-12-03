import { Props } from './types'

function Label({ label, htmlFor }: Props) {
    return (
        <label
            className="text-xl font-semibold cursor-pointer select-none text-primary-dark"
            htmlFor={htmlFor}
        >
            {label}
        </label>
    )
}

export default Label
