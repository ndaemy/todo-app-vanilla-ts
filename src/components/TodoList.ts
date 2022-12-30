import { Component } from "@/types";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// TODO: 추후에 실제 데이터로 교체되어야 함
// 데모 투두 리스트 데이터
const DEMO_TODO_LIST: Todo[] = [
  { id: 1, text: "타입스크립트 배우기", done: true },
  { id: 2, text: "타입스크립트와 리액트 함께 사용해보기", done: true },
  { id: 3, text: "프로젝트에 타입스크립트 적용해보기", done: false },
];

export const TodoList: Component = () => {
  const list = document.createElement("ul");

  DEMO_TODO_LIST.forEach((todo) => {
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
