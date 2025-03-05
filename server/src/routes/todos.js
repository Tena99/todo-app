const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getSpecificTodo,
  addTodo,
} = require("../controllers/todos.js");

router.get("/details/:id", getSpecificTodo);
router.get("/:userId", getAllTodos);
router.post("/", addTodo);

module.exports = router;
