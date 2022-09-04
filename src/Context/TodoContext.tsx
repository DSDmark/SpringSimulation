import React, { useState } from "react";
import todoContext from "./Context";
import { Todo } from "../Components";
import { v4 } from "uuid";

interface Props {
  children: React.ReactNode;
}

const TodoData: Todo[] = [
  {
    id: v4(),
    text: "Get a Problem",
    isTodoDone: false
  },
  {
    id: v4(),
    text: "Feel along",
    isTodoDone: true
  },
  {
    id: v4(),
    text: "Just call me",
    isTodoDone: true
  },
  {
    id: v4(),
    text: "On a telephone",
    isTodoDone: false
  }
];

const TodoContext = (props: Props) => {
  const [state, setState] = useState(TodoData);
  return (
    <>
      <todoContext.Provider value={[state, setState]}>
        {props.children}
      </todoContext.Provider>
    </>
  );
};

export default TodoContext;
