import TextField from "@mui/material/TextField";
import { useState, KeyboardEvent } from "react";

type Props = {
  label?: string;
  onChange: (text: string) => void
}


function TextInput(props: Props) {
  const { label, onChange } = props;

  const [text, setText] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onChange(text);
      setText('');
    }
  };

  return (
    <TextField
      id="outlined-basic"
      label={label}
      color="info"
      variant="outlined"
      value={text}
      onChange={(e) => setText(e.target.value)}
      // onKeyPress={(e) => handleKeyDown(e)}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  )
}

export default TextInput;
