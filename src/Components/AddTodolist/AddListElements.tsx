import { Todo } from "../index";

const AddListElements: (
  e: any,
  inputState: string,
  setInputState: Function,
  setState: Function
) => void = (e, inputState, setInputState, setState) => {
  e.preventDefault();
  const newAddTodo = {
    id: new Date().getTime(),
    text: inputState,
    isTodoDone: false
  };

  setState((perv: Todo[]) => [...perv, newAddTodo]);
  setInputState("");
};

export default AddListElements;
