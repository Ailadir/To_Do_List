import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Todo from '../Todo';

describe('Todo Component', () => {
  it('renders the text input', () => {
    render(<Todo />);
    expect(screen.getByLabelText('What needs to be done?')).toBeInTheDocument();
  });

  it('adds a new todo when text is entered', async () => {
    render(<Todo />);
    const input = screen.getByLabelText('What needs to be done?');

    await userEvent.type(input, 'New todo item{enter}');

    expect(screen.getByText('New todo item')).toBeInTheDocument();
  });

  it('does not add empty todos', async () => {
    render(<Todo />);
    const input = screen.getByLabelText('What needs to be done?');

    await userEvent.type(input, '   {enter}');

    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('toggles todo completion status', async () => {
    render(<Todo />);
    const input = screen.getByLabelText('What needs to be done?');

    await userEvent.type(input, 'Test todo{enter}');
    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('filters todos correctly', async () => {
    render(<Todo />);
    const input = screen.getByLabelText('What needs to be done?');

    // Add two todos
    await userEvent.type(input, 'Todo 1{enter}');
    await userEvent.type(input, 'Todo 2{enter}');

    // Complete first todo
    const firstTodoCheckbox = screen.getAllByRole('checkbox')[0];
    await userEvent.click(firstTodoCheckbox);

    // Filter completed
    const completedFilter = screen.getByText('Completed');
    await userEvent.click(completedFilter);
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.queryByText('Todo 2')).not.toBeInTheDocument();

    // Filter active
    const activeFilter = screen.getByText('Active');
    await userEvent.click(activeFilter);
    expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });

  it('clears completed todos', async () => {
    render(<Todo />);
    const input = screen.getByLabelText('What needs to be done?');

    // Add and complete a todo
    await userEvent.type(input, 'Completed todo{enter}');
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    // Clear completed
    const clearButton = screen.getByText('Clear completed');
    await userEvent.click(clearButton);

    expect(screen.queryByText('Completed todo')).not.toBeInTheDocument();
  });
}); 
