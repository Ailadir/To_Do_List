import { Box } from "@mui/material";
import Checkbox from "../Checkbox";
import { TodoItemType } from "../../types/Todo";
import s from './TodoListItem.module.scss';

type Props = {
  todoItem: TodoItemType;
  toggleTodo: (id: number) => void;
}

function TodoListItem(props: Props) {
  const { todoItem, toggleTodo } = props

  return (
    <Box className={s.root}>
      <Checkbox
        todoId={todoItem.id}
        onChange={toggleTodo}
        checked={todoItem.completed} />
      <span color="black">{todoItem.text}</span>
    </Box>

  )
}

export default TodoListItem;
