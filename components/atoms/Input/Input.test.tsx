import { fireEvent, render } from '@testing-library/react'

import Input from './Input'

describe('Input', () => {
    it('renders without error', () => {
        const { getByRole } = render(
            <Input
                id="my-input"
                placeholder="Test placeholder"
                value=""
                onChange={jest.fn}
            />
        )
        expect(getByRole('textbox')).toBeInTheDocument()
    })

    it('renders with correct placeholder', () => {
        const testPlaceholder = 'Test placeholder'
        const { getByRole } = render(
            <Input
                id="my-input"
                placeholder={testPlaceholder}
                value=""
                onChange={jest.fn}
            />
        )
        expect(getByRole('textbox')).toHaveAttribute(
            'placeholder',
            testPlaceholder
        )
    })

    it('renders with correct value', () => {
        const testValue = 'Test value'
        const { getByRole } = render(
            <Input
                id="my-input"
                placeholder="Test placeholder"
                value={testValue}
                onChange={jest.fn}
            />
        )
        expect(getByRole('textbox')).toHaveAttribute('value', testValue)
    })

    it('fires onChange when changed', () => {
        const mockOnChange = jest.fn()
        const nextValue = 'Next value'
        const { getByRole } = render(
            <Input
                id="my-input"
                placeholder="Test placeholder"
                value=""
                onChange={mockOnChange}
            />
        )
        expect(mockOnChange).toHaveBeenCalledTimes(0)
        fireEvent.change(getByRole('textbox'), { target: { value: nextValue } })
        expect(mockOnChange).toHaveBeenCalledTimes(1)
        expect(mockOnChange).toHaveBeenCalledWith(nextValue)
    })
})
