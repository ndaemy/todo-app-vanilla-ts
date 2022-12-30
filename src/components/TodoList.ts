import { todoStore } from "@/store/todoStore";
import { Component } from "@/types";

export const TodoList: Component = () => {
  const list = document.createElement("ul");

  const onRemoveTodo = (id: number) => {
    todoStore.removeTodo(id);
    render();
  };

  const render = () => {
    list.innerHTML = "";
    todoStore.todos.forEach((todo) => {
      const item = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.done;
      checkbox.addEventListener("change", () => {
        todoStore.updateTodo(todo.id, checkbox.checked);
        render();
      });

      const text = document.createTextNode(todo.text);

      const button = document.createElement("button");
      button.innerText = "삭제";
      button.addEventListener("click", () => onRemoveTodo(todo.id));

      item.appendChild(checkbox);
      item.appendChild(text);
      item.appendChild(button);
      list.appendChild(item);
    });
  };

  render();

  return list;
};
