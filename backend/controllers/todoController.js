const todoModel = require("../models/todoModel");

async function getAllTodos(req, res) {
  const todos = await todoModel.find({});
  return res.status(200).json(todos);
}

async function addTodo(req, res) {
  const text = req.body;
  try {
    await todoModel.create(text);
  } catch {
    return res.status(500).json("Interal server error");
  }
  return res.status(201).json({ msg: "Todo Created successfully" });
}

async function updateTodo(req, res) {
  const { _id, text } = req.body;
  try {
    await todoModel.findByIdAndUpdate(_id, { text });
  } catch {
    return res.status(500).json("Internal server error");
  }
  return res.status(200).json({ msg: "Todo Updated successfully" });
}

async function deleteTodo(req, res) {
  const { _id } = req.body;
  try {
    await todoModel.findByIdAndDelete(_id);
  } catch {
    return res.status(500).json("Internal server error");
  }
  return res.status(200).json({ msg: "Todo Deleted successfully" });
}

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
