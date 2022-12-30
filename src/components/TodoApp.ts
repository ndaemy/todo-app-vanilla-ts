import { Component } from "@/types";

import { TodoAppHeader } from "./TodoAppHeader";
import { TodoInsert } from "./TodoInsert";

export const TodoApp: Component = () => {
  const app = document.createElement("div");
  app.id = "todo-app";

  app.appendChild(TodoAppHeader());
  app.appendChild(TodoInsert());

  return app;
};
