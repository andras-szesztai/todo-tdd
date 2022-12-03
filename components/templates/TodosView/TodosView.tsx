'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoInput } from 'components/molecules/TodoInput'
import { TTodoItem } from 'components/molecules/TodoItem'
import { TodoList } from 'components/organisms/TodoList'
import { TEST_ID } from 'constants/testIds'
import { Props } from './types'

function TodosView({ initialTodoItems = [] }: Props) {
    const [todos, setTodos] = useState<TTodoItem[]>(initialTodoItems)

    const handleTodoItemCompleteClick = (id: string) => {
        const nextTodos = [...todos]
        const todoIndex = nextTodos.findIndex((todo) => todo.id === id)
        nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted
        setTodos(nextTodos)
    }

    return (
        <section
            data-testid={TEST_ID.todoViewContainer}
            className="flex flex-col gap-4 font-medium -translate-y-12 text-primary-dark"
        >
            <TodoInput
                onSubmit={(newTodo) => {
                    setTodos((prev) => [
                        ...prev,
                        {
                            id: uuidv4(),
                            title: newTodo,
                            createdAt: new Date().toISOString(),
                            isCompleted: false,
                        },
                    ])
                }}
            />
            <TodoList
                todoItems={todos}
                onTodoItemCompleteClick={handleTodoItemCompleteClick}
            />
        </section>
    )
}

export default TodosView
