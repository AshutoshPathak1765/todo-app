import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoListItem from "./components/TodoListItem";
import { addTodo, getAllTodo, updateTodo, deleteTodo } from "./utils/HandleApi";
import { Box, Button, TextField } from "@mui/material";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isUpdating, setisUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");
  useEffect(() => {
    getAllTodo(setTodo);
  }, []);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const updateMode = (_id, text) => {
    setInputValue(text);
    setTodoId(_id);
    setisUpdating(true);
  };
  return (
    <>
      <Navbar />
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
          onClick={
            isUpdating
              ? () =>
                  updateTodo(
                    todoId,
                    inputValue,
                    setInputValue,
                    setisUpdating,
                    setTodo
                  )
              : () => addTodo(inputValue, setInputValue, setTodo)
          }
          sx={{ padding: "15px", fontFamily: "Roboto", fontWeight: "400" }}
        >
          {isUpdating ? "Update Todo" : "Add Todo"}
        </Button>
      </Box>
      {todo.map((item) => (
        <TodoListItem
          updateMode={() => updateMode(item._id, item.text)}
          deleteMode={() => deleteTodo(item._id,setTodo)}
          text={item.text}
          key={item._id}
        />
      ))}
    </>
  );
}

export default App;
