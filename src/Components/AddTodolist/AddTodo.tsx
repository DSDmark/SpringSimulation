import React, { useState, FC } from 'react';
import AddListElements from './AddListElements';
import { todoContext } from '../../Context';
import { useContext } from 'react';

const AddTodo: FC = () => {
    const [, setState] = useContext<any>(todoContext);

    const [inputState, setInputState] = useState<string>('');
    return (
        <>
            <div>
                <label htmlFor="addTodo">
                    <input
                        type="text"
                        id="addTodo"
                        onChange={(e) => setInputState(e.target.value)}
                        value={inputState}
                    />
                    <button onClick={(e) => AddListElements(e, inputState, setInputState, setState)}>AddTodo</button>
                </label>
            </div>
        </>
    );
};

export default AddTodo;
