import { Todo } from './TodoItemsList';

export const ToggleTodo = (id: string, setState: (value: any) => any) => {
    setState((perv: any) => perv.map((e: Todo) => (e.id === id ? { ...e, isTodoDone: !e.isTodoDone } : e)));
};
