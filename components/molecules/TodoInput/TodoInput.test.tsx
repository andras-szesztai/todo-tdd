import { render } from '@testing-library/react'

import { TEST_ID } from 'constants/testIds'

import TodoInput from './TodoInput'
import {
    TODO_INPUT_BUTTON_TEXT,
    TODO_INPUT_LABEL,
    TODO_INPUT_PLACEHOLDER,
} from './constants'

describe('TodoInput', () => {
    it('renders default state with correct label, without any value and with correct placeholder in input and submit button disabled', () => {
        const { getByTestId, asFragment } = render(<TodoInput />)
        const label = getByTestId(TEST_ID.todoInputLabel)
        expect(label).toBeInTheDocument()
        expect(label.textContent).toBe(TODO_INPUT_LABEL)
        const input = getByTestId(TEST_ID.todoInput)
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('placeholder', TODO_INPUT_PLACEHOLDER)
        expect(input).not.toHaveFocus()
        const button = getByTestId(TEST_ID.todoInputButton)
        expect(button).toBeInTheDocument()
        expect(button.textContent).toBe(TODO_INPUT_BUTTON_TEXT)
        expect(button).toBeDisabled()
        expect(asFragment()).toMatchSnapshot()
    })
})