import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import TodoListItem from "./components/TodoListItem";
import { getAllTodo} from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  useEffect(()=> {
    getAllTodo(setTodo)
  },[todo])
  return (
    <>
      <Navbar />
      <InputField todo={todo} setTodo={setTodo} />
      {todo.map((item) => (
        <TodoListItem todo={item.text} key={item._id} _id={item._id} todos={todo} setTodo={setTodo} />
      ))}
    </>
  );
}

export default App;
