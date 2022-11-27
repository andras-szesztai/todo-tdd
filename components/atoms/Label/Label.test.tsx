import { render } from '@testing-library/react'

import Label from './Label'

describe('Label', () => {
    it('renders without error', () => {
        const testId = 'my-label'
        const { getByTestId } = render(
            <Label testId={testId} label="My label" htmlFor="input" />
        )
        expect(getByTestId(testId)).toBeInTheDocument()
    })

    it('renders with correct text', () => {
        const testId = 'my-label'
        const testText = 'test'
        const { getByTestId } = render(
            <Label testId={testId} label={testText} htmlFor="input" />
        )
        expect(getByTestId(testId)).toBeInTheDocument()
        expect(getByTestId(testId)).toHaveTextContent(testText)
    })
})
