import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  const mockTodos = [
    { id: 1, text: 'Test Todo 1', completed: false },
    { id: 2, text: 'Test Todo 2', completed: true }
  ];

  it('renders empty state message when no todos', () => {
    render(<TodoList todoItems={[]} toggleTodo={() => {}} />);
    expect(screen.getByText('Just do it mate...')).toBeInTheDocument();
  });

  it('renders todo items', () => {
    render(<TodoList todoItems={mockTodos} toggleTodo={() => {}} />);
    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });

  it('calls toggleTodo when a todo is clicked', async () => {
    const mockToggle = jest.fn();
    render(<TodoList todoItems={mockTodos} toggleTodo={mockToggle} />);
    
    const firstTodoCheckbox = screen.getAllByRole('checkbox')[0];
    await userEvent.click(firstTodoCheckbox);
    
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
}); 