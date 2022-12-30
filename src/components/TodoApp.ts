import { TodoAppHeader } from "./TodoAppHeader";

export const TodoApp = () => {
  const app = document.createElement("div");
  app.id = "todo-app";

  app.appendChild(TodoAppHeader());

  return app;
};
