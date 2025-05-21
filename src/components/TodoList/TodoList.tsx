import Box from "@mui/material/Box";
import { TodoItemType } from "../../types/Todo";
import TodoListItem from "../TodoListItem/TodoListItem";

type Props = {
  todoItems: TodoItemType[];
  toggleTodo: (id: number) => void;
}

function TodoList(props: Props) {
  const { todoItems, toggleTodo } = props

  if (todoItems.length === 0) {
    return (
      <span style={{ color: 'gray', fontSize: '14px', margin: '0 auto', padding: '20px' }}>
        Just do it mate...
      </span>
    )
  }

  return (
    <Box>
      {todoItems.map((todoItem) => (
        <TodoListItem
          toggleTodo={toggleTodo}
          key={todoItem.id}
          todoItem={todoItem}
        />
      ))
      }
    </Box>
  )
}

export default TodoList
