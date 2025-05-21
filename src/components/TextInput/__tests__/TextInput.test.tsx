import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '../TextInput';

describe('TextInput Component', () => {
  it('renders with a label', () => {
    render(<TextInput label="Test Label" onChange={() => {}} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('updates value on typing', async () => {
    render(<TextInput label="Test Label" onChange={() => {}} />);
    const input = screen.getByLabelText('Test Label');
    
    await userEvent.type(input, 'Hello');
    expect(input).toHaveValue('Hello');
  });

  it('calls onChange and clears input on Enter', async () => {
    const mockOnChange = jest.fn();
    render(<TextInput label="Test Label" onChange={mockOnChange} />);
    const input = screen.getByLabelText('Test Label');
    
    await userEvent.type(input, 'Test Todo{enter}');
    
    expect(mockOnChange).toHaveBeenCalledWith('Test Todo');
    expect(input).toHaveValue('');
  });
}); 