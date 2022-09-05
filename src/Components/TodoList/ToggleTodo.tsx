import { Todo } from './TodoItemsList';

export const ToggleTodo = (id: string, setState: Function) => {
    setState((perv: Todo) => perv.map((e: Todo) => (e.id === id ? { ...e, isTodoDone: !e.isTodoDone } : e)));
};
