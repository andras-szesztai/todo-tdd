import { fireEvent, render } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
    it('renders without error', () => {
        const testId = 'my-input'
        const { getByTestId } = render(
            <Input
                id="my-input"
                testId={testId}
                placeholder="Test placeholder"
                value=""
                onChange={jest.fn}
            />
        )
        expect(getByTestId(testId)).toBeInTheDocument()
    })

    it('renders with correct placeholder', () => {
        const testPlaceholder = 'Test placeholder'
        const testId = 'my-input'
        const { getByTestId } = render(
            <Input
                id="my-input"
                testId={testId}
                placeholder={testPlaceholder}
                value=""
                onChange={jest.fn}
            />
        )
        expect(getByTestId(testId)).toHaveAttribute(
            'placeholder',
            testPlaceholder
        )
    })

    it('renders with correct value', () => {
        const testValue = 'Test value'
        const testId = 'my-input'
        const { getByTestId } = render(
            <Input
                id="my-input"
                testId={testId}
                placeholder="Test placeholder"
                value={testValue}
                onChange={jest.fn}
            />
        )
        expect(getByTestId(testId)).toHaveAttribute('value', testValue)
    })

    it('fires onChange when changed', () => {
        const mockOnChange = jest.fn()
        const testId = 'my-input'
        const nextValue = 'Next value'
        const { getByTestId } = render(
            <Input
                id="my-input"
                testId={testId}
                placeholder="Test placeholder"
                value=""
                onChange={mockOnChange}
            />
        )
        expect(mockOnChange).toHaveBeenCalledTimes(0)
        fireEvent.change(getByTestId(testId), { target: { value: nextValue } })
        expect(mockOnChange).toHaveBeenCalledTimes(1)
        expect(mockOnChange).toHaveBeenCalledWith(nextValue)
    })
})
