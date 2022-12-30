import { Component } from "@/types";
import { TodoAppHeader } from "./TodoAppHeader";

export const TodoApp: Component = () => {
  const app = document.createElement("div");
  app.id = "todo-app";

  app.appendChild(TodoAppHeader());

  return app;
};
