import axios from "axios";

const baseURL = "http://localhost:5000";

const getAllTodo = (setTodo) => {
  axios.get(baseURL).then(({ data }) => {
    setTodo(data);
  });
};

const addTodo = (text, setInputValue, todo, setTodo) => {
  axios.post(`${baseURL}/add`, { text }).then((data) => {
    setInputValue("");
    todo.push(text);
    console.log(todo);
    setTodo(todo);
  });
};

const deleteTodo = (_id, setTodo) => {
  axios.delete(`${baseURL}/remove`, { _id }).then((data) => {
    console.log(data);
    getAllTodo(setTodo);
  });
};

export { getAllTodo, addTodo, deleteTodo };
