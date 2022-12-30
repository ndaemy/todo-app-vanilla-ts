import { Component } from "@/types";

import { TodoAppHeader } from "./TodoAppHeader";
import { TodoInsert } from "./TodoInsert";
import { TodoList } from "./TodoList";

export const TodoApp: Component = () => {
  const app = document.createElement("div");
  app.id = "todo-app";

  const render = () => {
    app.innerHTML = "";
    app.appendChild(TodoAppHeader());
    // 이게 최선인가
    app.appendChild(TodoInsert(render));
    app.appendChild(TodoList());
  };

  render();

  return app;
};
