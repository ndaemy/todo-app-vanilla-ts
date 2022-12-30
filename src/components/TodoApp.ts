import { Component } from "@/types";

import { TodoAppHeader } from "./TodoAppHeader";
import { TodoInsert } from "./TodoInsert";
import { TodoList } from "./TodoList";

export const TodoApp: Component = () => {
  const app = document.createElement("div");
  app.id = "todo-app";

  app.appendChild(TodoAppHeader());
  app.appendChild(TodoInsert());
  app.appendChild(TodoList());

  return app;
};
