import { useState } from 'react';
import { TodoFilterType, TodoItemType } from '../../types/Todo';
import TextInput from '../TextInput';
import TodoList from '../TodoList';
import s from './Todo.module.scss';
import TodoFilters from '../TodoFilters';

function Todo() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [filter, setFilter] = useState<TodoFilterType>('all');

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos(prev => [
        ...prev,
        {
          id: Date.now(),
          text: text.trim(),
          completed: false
        }
      ]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });


  return (
    <div className={s.root}>
      <TextInput
        label='What needs to be done?'
        onChange={addTodo} />
      <TodoList
        toggleTodo={toggleTodo}
        todoItems={filteredTodos} />
      {todos.length > 0 && (
        <TodoFilters
          filter={filter}
          onFilterChange={setFilter}
          todosCount={todos.length}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />
      )}

    </div>
  )
}

export default Todo
