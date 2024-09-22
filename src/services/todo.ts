import { Todo } from "../models/todo";

export class Service {
  private todos: Todo[] = [];

  // store
  store(title: string, description: string): Todo {
    const id = this.todos.length + 1;
    const newTodo = new Todo(id, title, description);
    this.todos.push(newTodo);
    return newTodo;
  }
  // index
  index(): Todo[] {
    return this.todos;
  }
  // get single todo
  getSingle(id: number): Todo | undefined {
    return this.todos.find((value) => value.id === id);
  }
  // update todo
  update(
    id: number,
    title?: string,
    description?: string,
    isComplete?: boolean
  ): Todo | undefined {
    const todo = this.getSingle(id);

    if (todo) {
      if (title) todo.title = title;
      if (description) todo.description = description;
      if (isComplete !== undefined) todo.isComplete = isComplete;
    }
    return todo;
  }
  // Delete a todo
  delete(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
