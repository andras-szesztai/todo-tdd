import { fireEvent, render } from '@testing-library/react'
import { TEST_ID } from 'constants/testIds'

import TodosView from './TodosView'

describe('TodosView', () => {
    it('renders without error', () => {
        const { getByTestId } = render(<TodosView />)
        expect(getByTestId(TEST_ID.todoViewContainer)).toBeInTheDocument()
    })

    it('displays submitted todos in todos list, todos with same name can be submitted', () => {
        const { getByTestId, queryByTestId, getAllByTestId, asFragment } =
            render(<TodosView />)
        expect(asFragment()).toMatchSnapshot()
        expect(queryByTestId(TEST_ID.todoItem)).not.toBeInTheDocument()
        const firstItem = 'My first todo'
        fireEvent.change(getByTestId(TEST_ID.todoInput), {
            target: { value: firstItem },
        })
        fireEvent.click(getByTestId(TEST_ID.todoInputButton))
        let todoItems = getAllByTestId(TEST_ID.todoItem)
        expect(todoItems).toHaveLength(1)
        expect(todoItems[0]).toHaveTextContent(firstItem)
        const secondItem = 'My second todo'
        fireEvent.change(getByTestId(TEST_ID.todoInput), {
            target: { value: secondItem },
        })
        fireEvent.click(getByTestId(TEST_ID.todoInputButton))
        todoItems = getAllByTestId(TEST_ID.todoItem)
        expect(todoItems).toHaveLength(2)
        expect(todoItems[0]).toHaveTextContent(firstItem)
        expect(todoItems[1]).toHaveTextContent(secondItem)
        fireEvent.change(getByTestId(TEST_ID.todoInput), {
            target: { value: firstItem },
        })
        fireEvent.click(getByTestId(TEST_ID.todoInputButton))
        todoItems = getAllByTestId(TEST_ID.todoItem)
        expect(todoItems).toHaveLength(3)
        expect(todoItems[0]).toHaveTextContent(firstItem)
        expect(todoItems[1]).toHaveTextContent(secondItem)
        expect(todoItems[2]).toHaveTextContent(firstItem)
        expect(asFragment()).toMatchSnapshot()
    })
})
