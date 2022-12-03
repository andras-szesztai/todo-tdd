'use client'

import { Props } from './types'

function Input({ placeholder, value, id, onChange }: Props) {
    return (
        <input
            id={id}
            className="p-2 text-base font-medium border rounded-lg w-60 border-primary-dark focus:outline-none focus:border-accent placeholder-primary-dark-disabled text-primary-dark"
            placeholder={placeholder}
            value={value}
            onChange={(event) => {
                onChange(event.target.value)
            }}
        />
    )
}

export default Input
