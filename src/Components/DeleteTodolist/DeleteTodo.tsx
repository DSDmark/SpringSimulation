import { Todo } from "../index";

const DeleteTodo = (id: string, setState: Function) => {
  setState((perv: Todo[]) => perv.filter((e: Todo) => e.id !== id));
};

export default DeleteTodo;
