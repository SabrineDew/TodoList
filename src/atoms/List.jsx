import React from "react";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { Box, Box2 } from "../style/styled";
import { Buttons, Button } from "../style/styled";
import { FontListe } from "../style/styled";
import { Input } from "../style/styled";

const List = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [check] = useState(false);

  const list1 = { id: Math.floor(Math.random() * 1000), title: value };

  const deleteItem = (id) => {
    let box = list.filter((li) => li.id !== id);
    setList(box);
  };

  const handleClick = () => {
    setList((prevState) => [...prevState, list1]);
    setValue("");
  };

  useEffect(() => {
    if (check === true) {
      setList([]);
    }
  }, [check]);

  return (
    <Box>
      <Input
        placeholder="Nom de ta liste"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      <Box>
        <Buttons onClick={() => handleClick()}>Créer une Liste</Buttons>
      </Box>
      <Box2>
        {list.map((lists) => (
          <FontListe>
            {"📌"}

            <div key={lists.id}>
              <label htmlFor="list">
                {lists.title}{" "}
                <Button value={check} onClick={() => deleteItem(lists.id)}>
                  ✓
                </Button>
              </label>
              <Todo />
            </div>
          </FontListe>
        ))}
      </Box2>
    </Box>
  );
};

export default List;
