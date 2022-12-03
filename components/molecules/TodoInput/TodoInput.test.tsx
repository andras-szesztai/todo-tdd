import { fireEvent, render } from '@testing-library/react'

import TodoInput from './TodoInput'
import {
    TODO_INPUT_BUTTON_TEXT,
    TODO_INPUT_LABEL,
    TODO_INPUT_PLACEHOLDER,
} from './constants'

describe('TodoInput', () => {
    it('renders default state with correct label, without any value and with correct placeholder in input and submit button disabled', () => {
        const { getByText, getByRole, asFragment } = render(
            <TodoInput onSubmit={jest.fn} />
        )
        const label = getByText(TODO_INPUT_LABEL)
        expect(label).toBeInTheDocument()
        const input = getByRole('textbox')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('placeholder', TODO_INPUT_PLACEHOLDER)
        expect(input).not.toHaveFocus()
        const button = getByRole('button', { name: /submit/i })
        expect(button).toBeInTheDocument()
        expect(button.textContent).toBe(TODO_INPUT_BUTTON_TEXT)
        expect(button).toBeDisabled()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders input field that can be type into resulting in enabled submit button', () => {
        const nextValue = 'test todo'
        const { getByRole, asFragment } = render(
            <TodoInput onSubmit={jest.fn} />
        )
        const input = getByRole('textbox')
        const button = getByRole('button', { name: /submit/i })
        expect(input).toHaveValue('')
        expect(button).toBeDisabled()
        fireEvent.change(input, { target: { value: nextValue } })
        expect(input).toHaveValue(nextValue)
        expect(button).not.toBeDisabled()
        expect(asFragment()).toMatchSnapshot()
    })

    it('fires onSubmit & empties input value when enabled button is clicked and disables button', () => {
        const nextValue = 'test todo'
        const mockOnSubmit = jest.fn()
        const { getByRole, asFragment } = render(
            <TodoInput onSubmit={mockOnSubmit} />
        )
        const input = getByRole('textbox')
        const button = getByRole('button', { name: /submit/i })
        fireEvent.change(input, { target: { value: nextValue } })
        expect(mockOnSubmit).toHaveBeenCalledTimes(0)
        expect(input).toHaveValue(nextValue)
        expect(button).not.toBeDisabled()
        fireEvent.click(button)
        expect(mockOnSubmit).toHaveBeenCalledTimes(1)
        expect(mockOnSubmit).toHaveBeenCalledWith(nextValue)
        expect(input).toHaveValue('')
        expect(button).toBeDisabled()
        expect(asFragment()).toMatchSnapshot()
    })
})
