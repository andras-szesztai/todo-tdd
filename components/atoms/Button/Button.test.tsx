import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
    it('renders without error', () => {
        const testId = 'my-button'
        const { getByTestId } = render(
            <Button text="test" testId={testId} onClick={jest.fn} />
        )
        expect(getByTestId(testId)).toBeInTheDocument()
    })

    it('renders with correct text', () => {
        const testText = 'test'
        const { getByText } = render(
            <Button testId="button" text={testText} onClick={jest.fn} />
        )
        expect(getByText(testText)).toBeInTheDocument()
    })

    it('fires onClick when clicked', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(
            <Button testId="button" text="test" onClick={mockOnClick} />
        )
        expect(mockOnClick).toHaveBeenCalledTimes(0)
        getByTestId('button').click()
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
})
