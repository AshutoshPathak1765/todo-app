import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTodo, updateTodo } from "../utils/HandleApi";
const TodoListItem = (props) => {
  return (
    <Stack
      sx={{
        listStyle: "none",
        width: "50%",
        padding: "10px",
        margin: "20px auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <ListItem>
        <ListItemText primary={props.todo} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon
              onClick={() => {
                deleteTodo(props._id, props.setTodo);
              }}
            />
          </IconButton>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Stack>
  );
};

export default TodoListItem;
