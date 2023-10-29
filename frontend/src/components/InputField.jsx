import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { addTodo } from "../utils/HandleApi";
function InputField(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <TextField
        sx={{
          width: "40%",
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "1.5rem",
        }}
        variant="outlined"
        label="Create Todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ padding: "15px", fontFamily: "Roboto", fontWeight: "400" }}
        onClick={() => {
          addTodo(inputValue, setInputValue, props.todo, props.setTodo);
        }}
      >
        Add Todo
      </Button>
    </Box>
  );
}

export default InputField;
