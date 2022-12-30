export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

class TodoStore {
  todos: Todo[] = [
    { id: 1, text: "타입스크립트 배우기", done: true },
    { id: 2, text: "타입스크립트와 리액트 함께 사용해보기", done: true },
    { id: 3, text: "프로젝트에 타입스크립트 적용해보기", done: false },
  ];

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

export const todoStore = new TodoStore();
