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
        <ListItemText primary={props.text} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={props.deleteMode} />
          </IconButton>
          <IconButton edge="end" aria-label="edit">
            <EditIcon onClick={props.updateMode} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Stack>
  );
};

export default TodoListItem;
