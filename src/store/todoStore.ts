export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const LOCAL_STORAGE_KEY = "todo-app";

class TodoStore {
  todos: Todo[] = [];
  constructor() {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    this.todos = storage
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      : [
          { id: 1, text: "타입스크립트 배우기", done: true },
          { id: 2, text: "타입스크립트와 리액트 함께 사용해보기", done: true },
          { id: 3, text: "프로젝트에 타입스크립트 적용해보기", done: false },
        ];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }

  syncStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }

  addTodo = (text: string) => {
    const todo: Todo = {
      id: this.todos.length
        ? Math.max(...this.todos.map((todo) => todo.id)) + 1
        : 1,
      text,
      done: false,
    };
    this.todos = [...this.todos, todo];
    this.syncStorage();
  };

  updateTodo = (id: number, done: boolean) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, done } : todo
    );
    this.syncStorage();
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.syncStorage();
  };
}

export const todoStore = new TodoStore();
