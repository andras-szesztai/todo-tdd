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

function TodoInput() {
    return (
        <div className="flex gap-2 items-end">
            <div className="flex flex-col gap-2">
                <div className="ml-1">
                    <Label
                        label={TODO_INPUT_LABEL}
                        testId={TEST_ID.todoInputLabel}
                        htmlFor={TODO_INPUT_ID}
                    />
                </div>
                <Input
                    value=""
                    placeholder={TODO_INPUT_PLACEHOLDER}
                    testId={TEST_ID.todoInput}
                    id={TODO_INPUT_ID}
                />
            </div>
            <Button
                testId={TEST_ID.todoInputButton}
                text={TODO_INPUT_BUTTON_TEXT}
                disabled
            />
        </div>
    )
}

export default TodoInput
