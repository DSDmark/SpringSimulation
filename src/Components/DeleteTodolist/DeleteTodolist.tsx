import React, { useContext, FC } from 'react';
import { todoContext } from '../../Context';
import DeleteTodo from './DeleteTodo';

interface Props {
    id: string;
}

const DeleteTodolist: FC<Props> = ({ id }) => {
    const [, setState] = useContext(todoContext);
    return (
        <span
            role="img"
            aria-label="edit todo list"
            style={{ fontSize: '1.5rem' }}
            onClick={() => DeleteTodo(id, setState)}
        >
            🔴
        </span>
    );
};

export default DeleteTodolist;
