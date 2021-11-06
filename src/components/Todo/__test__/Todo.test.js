import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo'
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = tasks => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    })
}

describe('Todo', () => {
    test('todo is added', () => {
        render(<MockTodo />)
        addTask(['go shopping'])
        const divElement = screen.getByText(/go shopping/i)
        expect(divElement).toBeInTheDocument()
    });

    test('multiple todos are added', () => {
        render(<MockTodo />)
        addTask(['wash', 'clean', 'laundry'])
        const divElement = screen.getAllByTestId('task-container')
        expect(divElement.length).toBe(3)
    });

    test('task should not have completed class when initially rendered', () => {
        render(<MockTodo />)
        addTask(['wash'])
        const divElement = screen.getByText(/wash/i)
        expect(divElement).not.toHaveClass('todo-item-active')
    });

    test('task should have completed class when clicked', () => {
        render(<MockTodo />)
        addTask(['wash'])
        const divElement = screen.getByText(/wash/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active')
    });
})
