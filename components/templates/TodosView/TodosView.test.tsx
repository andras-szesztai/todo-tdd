import { fireEvent, render, within } from '@testing-library/react'
import { TODO_COMPLETE_BUTTON_TEXT } from 'components/molecules/TodoItem'
import { TEST_ID } from 'constants/testIds'

import TodosView from './TodosView'

describe('TodosView', () => {
    it('renders without error', () => {
        const { getByTestId } = render(<TodosView />)
        expect(getByTestId(TEST_ID.todoViewContainer)).toBeInTheDocument()
    })

    it('displays submitted todos in todos list, todos with same name can be submitted', () => {
        const { getByRole, queryByTestId, getAllByTestId, asFragment } = render(
            <TodosView />
        )
        expect(asFragment()).toMatchSnapshot()
        expect(queryByTestId(TEST_ID.todoItem)).not.toBeInTheDocument()
        const input = getByRole('textbox')
        const firstItem = 'My first todo'
        fireEvent.change(input, {
            target: { value: firstItem },
        })
        const todoSubmitButton = getByRole('button', { name: /submit/i })
        fireEvent.click(todoSubmitButton)
        let todoItems = getAllByTestId(TEST_ID.todoItem)
        expect(todoItems).toHaveLength(1)
        expect(todoItems[0]).toHaveTextContent(firstItem)
        const secondItem = 'My second todo'
        fireEvent.change(input, {
            target: { value: secondItem },
        })
        fireEvent.click(todoSubmitButton)
        todoItems = getAllByTestId(TEST_ID.todoItem)
        expect(todoItems).toHaveLength(2)
        expect(todoItems[0]).toHaveTextContent(firstItem)
        expect(todoItems[1]).toHaveTextContent(secondItem)
        fireEvent.change(input, {
            target: { value: firstItem },
        })
        fireEvent.click(todoSubmitButton)
        todoItems = getAllByTestId(TEST_ID.todoItem)
        expect(todoItems).toHaveLength(3)
        expect(todoItems[0]).toHaveTextContent(firstItem)
        expect(todoItems[1]).toHaveTextContent(secondItem)
        expect(todoItems[2]).toHaveTextContent(firstItem)
        expect(asFragment()).toMatchSnapshot()
    })

    it('allows user to complete and un-complete todos', () => {
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
        const { getAllByTestId } = render(
            <TodosView initialTodoItems={testTodoItems} />
        )
        const todos = getAllByTestId(TEST_ID.todoItem)
        const firstTodoCompleteButton = within(todos[0]).getByRole('button', {
            name: /complete/i,
        })
        const secondTodoCompleteButton = within(todos[1]).getByRole('button', {
            name: /complete/i,
        })
        expect(firstTodoCompleteButton).toHaveTextContent(
            TODO_COMPLETE_BUTTON_TEXT.complete
        )
        expect(secondTodoCompleteButton).toHaveTextContent(
            TODO_COMPLETE_BUTTON_TEXT.complete
        )
        fireEvent.click(firstTodoCompleteButton)
        expect(firstTodoCompleteButton).toHaveTextContent(
            TODO_COMPLETE_BUTTON_TEXT.unComplete
        )
        expect(secondTodoCompleteButton).toHaveTextContent(
            TODO_COMPLETE_BUTTON_TEXT.complete
        )
        fireEvent.click(firstTodoCompleteButton)
        expect(firstTodoCompleteButton).toHaveTextContent(
            TODO_COMPLETE_BUTTON_TEXT.complete
        )
        expect(secondTodoCompleteButton).toHaveTextContent(
            TODO_COMPLETE_BUTTON_TEXT.complete
        )
    })
})
