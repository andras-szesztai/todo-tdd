'use client'

import { useState } from 'react'

import { Button } from 'components/atoms/Button'
import { Input } from 'components/atoms/Input'
import { Label } from 'components/atoms/Label'
import { TEST_ID } from 'constants/testIds'

import {
    TODO_INPUT_BUTTON_TEXT,
    TODO_INPUT_LABEL,
    TODO_INPUT_PLACEHOLDER,
    TODO_INPUT_ID,
} from './constants'
import { Props } from './types'

function TodoInput({ onSubmit }: Props) {
    const [value, setValue] = useState('')
    return (
        <div className="flex items-end gap-2">
            <div className="flex flex-col gap-2">
                <div className="ml-1">
                    <Label
                        label={TODO_INPUT_LABEL}
                        testId={TEST_ID.todoInputLabel}
                        htmlFor={TODO_INPUT_ID}
                    />
                </div>
                <Input
                    onChange={(value) => {
                        setValue(value)
                    }}
                    value={value}
                    placeholder={TODO_INPUT_PLACEHOLDER}
                    id={TODO_INPUT_ID}
                />
            </div>
            <Button
                text={TODO_INPUT_BUTTON_TEXT}
                disabled={!value}
                onClick={() => {
                    onSubmit(value)
                    setValue('')
                }}
            />
        </div>
    )
}

export default TodoInput
