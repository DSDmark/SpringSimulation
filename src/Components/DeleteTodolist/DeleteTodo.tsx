import { Todo } from '../index';

const DeleteTodo = (id: string, setState: React.Dispatch<React.SetStateAction<Todo>>) => {
    setState((perv: Todo) => perv.filter((e: Todo) => e.id !== id));
};

export default DeleteTodo;
