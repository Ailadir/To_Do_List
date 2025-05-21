import { Button } from '@mui/material';
import { TodoFilterType } from '../../types/Todo';
import s from './TodoFilters.module.scss'
import TodoFilter from '../TodoFilter/TodoFilter';

const FILTERS: TodoFilterType[] = ['all', 'active', 'completed'];

type Props = {
  filter: TodoFilterType;
  onFilterChange: (filter: TodoFilterType) => void;
  todosCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

function TodoFilters(props: Props) {
  const {
    filter,
    onFilterChange,
    todosCount,
    completedCount,
    onClearCompleted
  } = props

  const itemsLeft = todosCount - completedCount;
  const itemText = itemsLeft === 1 ? 'item' : 'items';

  return (
    <div className={s.root}>
      <span className={s.todoCount}>
        <strong>{itemsLeft}</strong> {itemText} left
      </span>
      <ul className={s.filtersList}>

        {FILTERS.map((filterKey) => (
          <TodoFilter
            key={filterKey}
            activeFilter={filter}
            filter={filterKey}
            onFilterChange={onFilterChange}
          />
        ))}
      </ul>
      {completedCount > 0 && (
        <Button
          size="small"
          onClick={onClearCompleted}
        >
          Clear completed
        </Button>
      )}
    </div>
  );
};

export default TodoFilters; 
