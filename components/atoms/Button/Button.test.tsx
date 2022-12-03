import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
    it('renders without error', () => {
        const { getByRole } = render(
            <Button text="test" testId="test" onClick={jest.fn} />
        )
        expect(getByRole('button')).toBeInTheDocument()
    })

    it('renders with correct text', () => {
        const testText = 'test'
        const { getByRole } = render(
            <Button testId="button" text={testText} onClick={jest.fn} />
        )
        expect(getByRole('button', { name: testText })).toBeInTheDocument()
    })

    it('fires onClick when clicked', () => {
        const mockOnClick = jest.fn()
        const { getByRole } = render(
            <Button testId="button" text="test" onClick={mockOnClick} />
        )
        expect(mockOnClick).toHaveBeenCalledTimes(0)
        getByRole('button').click()
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
})
