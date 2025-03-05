const db = require("../../util/db-connect.js");

async function getAllTodos(req, res) {
  const userId = req.params.userId;

  const result = await db
    .select()
    .from("todos")
    .join("users", "users.id", "=", "todos.user_id")
    .where("user_id", userId);

  res.json(result);
}

async function getSpecificTodo(req, res) {
  const id = req.params.id;

  const todo = await db.select().from("todos").where("id", id).first();

  if (!todo) {
    return res.status(404).json({ message: "No tasks, enjoy your day off!" });
  }

  res.json(todo);
}

async function addTodo(req, res) {
  if (!req.body) {
    return res.send("There was no request body");
  }

  const task = await db.select().from("todos").where("task", req.body.task);

  if (task.length) {
    return res.send("This todo was already added");
  }

  await db("todos").insert({ ...req.body });

  res.json({ message: "Todo added successfully" });
}

module.exports = { getAllTodos, getSpecificTodo, addTodo };
