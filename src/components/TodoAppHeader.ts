import { Component } from "@/types";

export const TodoAppHeader: Component = () => {
  const header = document.createElement("h1");
  header.innerText = "Todo App";

  return header;
};
