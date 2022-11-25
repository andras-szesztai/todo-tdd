import { render } from '@testing-library/react'

import MyComponent from './MyComponent'

describe('MyComponent', () => {
    it('renders', () => {
        const { getByText } = render(<MyComponent />)
        expect(getByText('MyComponent')).toBeInTheDocument()
    })
})
