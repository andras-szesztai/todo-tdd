import { fireEvent, render, within } from '@testing-library/react'

import TodoList from './TodoList'

describe('TodoList', () => {
    it('renders without error', () => {
        const { getByRole, asFragment } = render(
            <TodoList todoItems={[]} onTodoItemCompleteClick={jest.fn} />
        )
        const todoListContainer = getByRole('list')
        expect(todoListContainer).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('displays submitted todos in the ui as list items ordered by date created ascending', () => {
        const testTodoItems = [
            {
                id: '2',
                title: 'My Todo 2',
                createdAt: '2022-11-28T14:54:38.113Z',
                isCompleted: false,
            },
            {
                id: '1',
                title: 'My Todo 1',
                createdAt: '2022-11-27T14:54:38.113Z',
                isCompleted: false,
            },
        ]
        const { getAllByRole, asFragment } = render(
            <TodoList
                todoItems={testTodoItems}
                onTodoItemCompleteClick={jest.fn}
            />
        )
        const todoItems = getAllByRole('listitem')
        expect(todoItems).toHaveLength(testTodoItems.length)
        expect(todoItems[0]).toHaveTextContent(testTodoItems[1].title)
        expect(todoItems[1]).toHaveTextContent(testTodoItems[0].title)
        expect(asFragment()).toMatchSnapshot()
    })

    it('calls onTodoItemCompleteClick when a todo item is clicked', () => {
        const testTodoItems = [
            {
                id: '1',
                title: 'My Todo 1',
                createdAt: '2022-11-27T14:54:38.113Z',
                isCompleted: false,
            },
            {
                id: '2',
                title: 'My Todo 2',
                createdAt: '2022-11-28T14:54:38.113Z',
                isCompleted: false,
            },
        ]
        const mockOnTodoItemCompleteClick = jest.fn()
        const { getAllByRole } = render(
            <TodoList
                todoItems={testTodoItems}
                onTodoItemCompleteClick={mockOnTodoItemCompleteClick}
            />
        )
        const todoItems = getAllByRole('listitem')
        const selectedIndex = 0
        expect(mockOnTodoItemCompleteClick).not.toHaveBeenCalled()
        fireEvent.click(
            within(todoItems[selectedIndex]).getByRole('button', {
                name: /complete/i,
            })
        )
        expect(mockOnTodoItemCompleteClick).toHaveBeenCalledTimes(1)
        expect(mockOnTodoItemCompleteClick).toHaveBeenCalledWith(
            testTodoItems[selectedIndex].id
        )
    })
})
