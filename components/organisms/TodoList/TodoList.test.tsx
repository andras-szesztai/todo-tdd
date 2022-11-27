import { render } from '@testing-library/react'
import { TEST_ID } from 'constants/testIds'

import TodoList from './TodoList'

describe('TodoList', () => {
    it('renders without error', () => {
        const { getByTestId, asFragment } = render(<TodoList todoItems={[]} />)
        const todoListContainer = getByTestId(TEST_ID.todoListContainer)
        expect(todoListContainer).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('displays submitted todos in the ui as list items ordered by date created ascending', () => {
        const testTodoItems = [
            {
                id: '2',
                title: 'My Todo 2',
                createdAt: '2022-11-28T14:54:38.113Z',
            },
            {
                id: '1',
                title: 'My Todo 1',
                createdAt: '2022-11-27T14:54:38.113Z',
            },
        ]
        const { getAllByTestId, asFragment } = render(
            <TodoList todoItems={testTodoItems} />
        )
        const todoItems = getAllByTestId(TEST_ID.todoItem)
        expect(todoItems).toHaveLength(testTodoItems.length)
        expect(todoItems[0]).toHaveTextContent(testTodoItems[1].title)
        expect(todoItems[1]).toHaveTextContent(testTodoItems[0].title)
        expect(asFragment()).toMatchSnapshot()
    })
})
