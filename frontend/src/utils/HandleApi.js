import axios from "axios";

const baseURL = "http://localhost:5000";

const getAllTodo = (setTodo) => {
  axios
    .get(baseURL)
    .then(({ data }) => {
      setTodo(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addTodo = (text, setInputValue, setTodo) => {
  axios.post(`${baseURL}/add`, { text }).then((data) => {
    console.log(data);
    setInputValue("");
    getAllTodo(setTodo);
  });
};

const updateTodo = (_id, text, setInputValue, setisUpdating, setTodo) => {
  axios
    .patch(`${baseURL}/update`, { _id, text })
    .then((data) => {
      setisUpdating(false);
      setInputValue("");
      getAllTodo(setTodo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteTodo = (_id, setTodo) => {
  axios
    .delete(`${baseURL}/remove`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ _id }),
    })
    .then((data) => {
      console.log(_id);
      getAllTodo(setTodo);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
