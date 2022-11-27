import { fireEvent, render, within } from '@testing-library/react'
import { TEST_ID } from 'constants/testIds'

import TodoList from './TodoList'

describe('TodoList', () => {
    it('renders without error', () => {
        const { getByTestId, asFragment } = render(
            <TodoList todoItems={[]} onTodoItemCompleteClick={jest.fn} />
        )
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
                isCompleted: false,
            },
            {
                id: '1',
                title: 'My Todo 1',
                createdAt: '2022-11-27T14:54:38.113Z',
                isCompleted: false,
            },
        ]
        const { getAllByTestId, asFragment } = render(
            <TodoList
                todoItems={testTodoItems}
                onTodoItemCompleteClick={jest.fn}
            />
        )
        const todoItems = getAllByTestId(TEST_ID.todoItem)
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
        const { getAllByTestId } = render(
            <TodoList
                todoItems={testTodoItems}
                onTodoItemCompleteClick={mockOnTodoItemCompleteClick}
            />
        )
        const todoItem = getAllByTestId(TEST_ID.todoItem)
        const selectedIndex = 0
        expect(mockOnTodoItemCompleteClick).not.toHaveBeenCalled()
        fireEvent.click(
            within(todoItem[selectedIndex]).getByTestId(
                TEST_ID.todoCompleteButton
            )
        )
        expect(mockOnTodoItemCompleteClick).toHaveBeenCalledTimes(1)
        expect(mockOnTodoItemCompleteClick).toHaveBeenCalledWith(
            testTodoItems[selectedIndex].id
        )
    })
})
