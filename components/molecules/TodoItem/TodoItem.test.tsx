import { fireEvent, render, within } from '@testing-library/react'

import TodoItem from './TodoItem'

describe('TodoItem', () => {
    it('renders without error', () => {
        const testTitle = 'My Todo'
        const { getByRole, asFragment } = render(
            <TodoItem
                title={testTitle}
                onCompleteClick={jest.fn}
                isCompleted={false}
            />
        )
        const todoItem = getByRole('listitem')
        expect(todoItem).toBeInTheDocument()
        expect(todoItem).toHaveTextContent(testTitle)
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders Complete button visibly hidden when not hovered', async () => {
        const mockOnCompleteClick = jest.fn()
        const { getByRole } = render(
            <TodoItem
                title="My Todo"
                onCompleteClick={mockOnCompleteClick}
                isCompleted
            />
        )
        const todoItem = getByRole('listitem')
        const completeTodoButton = within(todoItem).getByRole('button', {
            name: /Complete/i,
        })
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
        const { rerender, getByRole } = render(
            <TodoItem
                title="My Todo"
                onCompleteClick={jest.fn}
                isCompleted={false}
            />
        )
        const uncompletedTodoItem = getByRole('listitem')
        expect(uncompletedTodoItem).toHaveClass(uncompletedClasses)
        expect(uncompletedTodoItem).not.toHaveClass(completedClasses)
        rerender(
            <TodoItem title="My Todo" onCompleteClick={jest.fn} isCompleted />
        )
        const completedTodoItem = getByRole('listitem')
        expect(uncompletedTodoItem).not.toHaveClass(uncompletedClasses)
        expect(completedTodoItem).toHaveClass(completedClasses)
    })
})
