const { Router } = require("express");
const {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getAllTodos);
router.post("/add", addTodo);
router.patch("/update", updateTodo);
router.delete("/remove", deleteTodo);

module.exports = router;
