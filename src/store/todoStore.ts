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

  addTodo = (text: string) => {
    const todo: Todo = {
      id: this.todos.length
        ? Math.max(...this.todos.map((todo) => todo.id)) + 1
        : 1,
      text,
      done: false,
    };
    this.todos = [...this.todos, todo];
  };

  updateTodo = (id: number, done: boolean) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, done } : todo
    );
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

export const todoStore = new TodoStore();
