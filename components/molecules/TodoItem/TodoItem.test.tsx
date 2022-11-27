import { render } from '@testing-library/react'
import { TEST_ID } from 'constants/testIds'

import TodoItem from './TodoItem'

describe('TodoItem', () => {
    it('renders without error', () => {
        const testTitle = 'My Todo'
        const { getByTestId, asFragment } = render(
            <TodoItem title={testTitle} />
        )
        const todoItem = getByTestId(TEST_ID.todoItem)
        expect(todoItem).toBeInTheDocument()
        expect(todoItem).toHaveTextContent(testTitle)
        expect(asFragment()).toMatchSnapshot()
    })
})
