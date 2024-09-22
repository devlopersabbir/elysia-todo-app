import { Elysia } from "elysia";
import { Controller } from "../controllers/todo";

const controller = new Controller();
export const routes = (app: Elysia) => {
  app
    .prefix("state", "todos prefix")
    .post("/todos", controller.createTodo)
    .get("/todos", controller.getAllTodos)
    .get("/todos/:id", controller.getTodoById)
    .put("/todos/:id", controller.updateTodo)
    .delete("/todos/:id", controller.deleteTodo);
};
