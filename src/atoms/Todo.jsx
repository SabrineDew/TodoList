import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Box } from "../style/styled";
import { Button } from "../style/styled";
import { Input2 } from "../style/styled";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [check] = useState(false);

  const todo1 = { id: Math.floor(Math.random() * 1000), title: value };

  const deleteItem = (id) => {
    let box = todo.filter((tod) => tod.id !== id);
    setTodo(box);
  };

  const handleClick = () => {
    setTodo((prevState) => [...prevState, todo1]);
    setValue("");
  };

  useEffect(() => {
    if (check === true) {
      setTodo([]);
    }
  }, [check]);

  return (
    <Box>
      <Input2
        placeholder="A faire"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input2>
      <Button onClick={() => handleClick()}>+</Button>

      {todo.map((todos) => (
        <div key={todos.id}>
          <input
            type="radio"
            checked={check}
            onChange={() => deleteItem(todos.id)}
          ></input>
          <label htmlFor="todoss">{todos.title}</label>
        </div>
      ))}
    </Box>
  );
};

export default Todo;
