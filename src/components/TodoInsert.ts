import { Component } from "@/types";

export const TodoInsert: Component = () => {
  const form = document.createElement("form");
  form.onsubmit = (e) => {
    e.preventDefault();
  };

  const input = document.createElement("input");
  input.placeholder = "할 일을 입력하세요";
  form.appendChild(input);

  const button = document.createElement("button");
  button.innerHTML = "추가하기";
  form.appendChild(button);

  return form;
};
