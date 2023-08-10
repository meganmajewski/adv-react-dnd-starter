import { FormEvent, memo, useState } from "react";
import CharacterModel from "../models/CharacterModel";
import { Button, Stack, TextField } from "@mui/material";

interface Props {
  onAdd: (c: CharacterModel) => void;
}

const AddCharacterForm = ({ onAdd }: Props) => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    onAdd({ name, class: className, level: 1 });
    setName("");
    setClassName("");
  };
  return (
    <form onSubmit={submitHandler}>
      <Stack spacing={1} sx={{ padding: "30px" }}>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="class"
          label="Class"
          variant="standard"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Stack>
    </form>
  );
};

export default memo(AddCharacterForm);
