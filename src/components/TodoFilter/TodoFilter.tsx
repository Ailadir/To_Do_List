import { TodoFilterType } from '../../types/Todo';
import s from './TodoFilter.module.scss';

type Props = {
  activeFilter: TodoFilterType;
  filter: TodoFilterType;
  onFilterChange: (filter: TodoFilterType) => void;
}

function TodoFilter(props: Props) {
  const { activeFilter, filter, onFilterChange } = props

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>, filter: TodoFilterType) => {
    e.preventDefault();
    onFilterChange(filter);
  };

  return (
    <li>
      <button
        className={activeFilter === filter ? s.selected : ''}
        onClick={(e) => handleOnClick(e, filter)}
      >
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </button>
    </li>
  )
}

export default TodoFilter
