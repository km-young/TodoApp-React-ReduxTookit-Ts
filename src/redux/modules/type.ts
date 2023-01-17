export interface TodoState {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

export interface TodoInitialState {
  todos: TodoState[];
}

