import { todoStore } from "@/store/todoStore";
import { Component } from "@/types";

export const TodoList: Component = () => {
  const list = document.createElement("ul");

  todoStore.todos.forEach((todo) => {
    const item = document.createElement("li");
    item.id = String(todo.id);
    item.innerHTML = `
      <input type="checkbox" ${todo.done ? "checked" : ""} />
      <span>${todo.text}</span>
      <button>삭제</button>
    `;
    list.appendChild(item);
  });

  return list;
};
