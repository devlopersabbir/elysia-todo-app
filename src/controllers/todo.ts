import { Context, error } from "elysia";
import { Service } from "../services/todo";

export class Controller {
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  // Handler for creating a new todo
  createTodo = (ctx: Context) => {
    const reqBody: ctxBody = ctx.body as ctxBody;

    const todo = this.service.store(reqBody.title, reqBody.description);
    return { todo };
  };

  // Handler for getting all todos
  getAllTodos = (ctx: Context) => {
    const todos = this.service.index();
    return todos;
  };

  // Handler for getting a todo by ID
  getTodoById = (ctx: Context) => {
    const id = Number(ctx.params.id);

    const todo = this.service.getSingle(id);
    if (!todo) return error("Bad Gateway", "todo not found");
    return JSON.stringify(todo);
  };

  // Handler for updating a todo
  updateTodo = (ctx: Context) => {
    const id = Number(ctx.params.id);
    const reqBody: ctxBody = ctx.body as ctxBody;

    const updatedTodo = this.service.update(
      id,
      reqBody.title,
      reqBody.description,
      reqBody.isComplete
    );

    if (!updatedTodo) return error("Not Found", "todo not found!");
    return { message: "todo update successfully", todo: updatedTodo };
  };

  // Handler for deleting a todo
  deleteTodo = (ctx: Context) => {
    const id = Number(ctx.params.id);
    const success = this.service.delete(id);

    if (!success) return error("Not Found", "todo not found!");

    return { message: "Todo deleted successfully" };
  };
}
