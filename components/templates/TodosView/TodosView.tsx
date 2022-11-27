'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoInput } from 'components/molecules/TodoInput'
import { TTodoItem } from 'components/molecules/TodoItem'
import { TodoList } from 'components/organisms/TodoList'
import { TEST_ID } from 'constants/testIds'

function TodosView() {
    const [todos, setTodos] = useState<TTodoItem[]>([])
    return (
        <div
            data-testid={TEST_ID.todoViewContainer}
            className="flex flex-col gap-4 -translate-y-12 text-primary-dark font-medium"
        >
            <TodoInput
                onSubmit={(newTodo) => {
                    setTodos((prev) => [
                        ...prev,
                        {
                            id: uuidv4(),
                            title: newTodo,
                            createdAt: new Date().toISOString(),
                        },
                    ])
                }}
            />
            <TodoList todoItems={todos} />
        </div>
    )
}

export default TodosView
