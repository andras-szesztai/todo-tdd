import { fireEvent, render, within } from '@testing-library/react'
import { TEST_ID } from 'constants/testIds'

import TodoItem from './TodoItem'

describe('TodoItem', () => {
    it('renders without error', () => {
        const testTitle = 'My Todo'
        const { getByTestId, asFragment } = render(
            <TodoItem
                title={testTitle}
                onCompleteClick={jest.fn}
                isCompleted={false}
            />
        )
        const todoItem = getByTestId(TEST_ID.todoItem)
        expect(todoItem).toBeInTheDocument()
        expect(todoItem).toHaveTextContent(testTitle)
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders Complete button visibly hidden when not hovered', async () => {
        const mockOnCompleteClick = jest.fn()
        const { getByTestId } = render(
            <TodoItem
                title="My Todo"
                onCompleteClick={mockOnCompleteClick}
                isCompleted
            />
        )
        const todoItem = getByTestId(TEST_ID.todoItem)
        const completeTodoButton = within(todoItem).getByTestId(
            TEST_ID.todoCompleteButton
        )
        expect(completeTodoButton.closest('span')).toHaveClass(
            'opacity-0 group-hover:opacity-100'
        )
        expect(mockOnCompleteClick).not.toHaveBeenCalled()
        fireEvent.click(completeTodoButton)
        expect(mockOnCompleteClick).toHaveBeenCalledTimes(1)
    })

    it('renders completed item visually distinct from uncompleted items', () => {
        const uncompletedClasses =
            'bg-white border-primary-dark text-primary-dark'
        const completedClasses =
            'bg-transparent border-primary-dark-disabled text-white'
        const { rerender, getByTestId } = render(
            <TodoItem
                title="My Todo"
                onCompleteClick={jest.fn}
                isCompleted={false}
            />
        )
        const uncompletedTodoItem = getByTestId(TEST_ID.todoItem)
        expect(uncompletedTodoItem).toHaveClass(uncompletedClasses)
        expect(uncompletedTodoItem).not.toHaveClass(completedClasses)
        rerender(
            <TodoItem title="My Todo" onCompleteClick={jest.fn} isCompleted />
        )
        const completedTodoItem = getByTestId(TEST_ID.todoItem)
        expect(uncompletedTodoItem).not.toHaveClass(uncompletedClasses)
        expect(completedTodoItem).toHaveClass(completedClasses)
    })
})
