import { Component } from "@/types";
import { todoStore } from "@/store/todoStore";

export const TodoInsert: Component = (reRenderParent) => {
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.placeholder = "할 일을 입력하세요";
  form.appendChild(input);

  const button = document.createElement("button");
  button.innerHTML = "추가하기";
  form.appendChild(button);

  form.onsubmit = (e) => {
    e.preventDefault();
    todoStore.addTodo(input.value);
    reRenderParent();
  };

  return form;
};
