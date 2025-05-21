import MuiCheckbox from '@mui/material/Checkbox'
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import CircleChecked from '@mui/icons-material/CheckCircleOutline';

type Props = {
  todoId: number,
  onChange: (id: number) => void,
  checked: boolean,
}

function Checkbox(props: Props) {
  const {
    todoId,
    onChange,
    checked
  } = props

  return (
    <MuiCheckbox
      onClick={() => onChange(todoId)}
      size='large'
      checked={checked}
      icon={<CircleUnchecked />}
      checkedIcon={<CircleChecked />}
    />
  )
}

export default Checkbox
