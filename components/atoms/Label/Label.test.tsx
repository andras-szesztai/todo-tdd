import { render } from '@testing-library/react'

import Label from './Label'

describe('Label', () => {
    it('renders without error', () => {
        const label = 'My label'
        const { getByText } = render(<Label label={label} htmlFor="input" />)
        expect(getByText(label)).toBeInTheDocument()
    })
})
