import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import List from "../atoms/List";
import { Title } from "../style/styled";
import { Box } from "../style/styled";
import { Button } from "../style/styled";
import { Sort } from "../style/styled";
import { Font } from "../style/styled";
import { Input } from "../style/styled";
import { NavLi } from "../style/styled";
import { LinkElem } from "../style/styled";

const Tableau = () => {
  const [value, setValue] = useState("");
  const [tableau, setTableau] = useState([]);

  const tableau1 = { id: Math.floor(Math.random() * 1000), title: value };

  const handleClick = () => {
    setTableau([tableau1]);
    setValue("");
  };

  const handleDelete = () => {
    setTableau([]);
  };

  return (
    <Box>
      <NavLi>
        {console.log(NavLink)}
        <LinkElem to="/">Back to Home</LinkElem>
      </NavLi>

      <br />

      <Title>Ma Todo List </Title>

      <Input
        value={value}
        placeholder="Nom de la catégorie"
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      <Box>
        {" "}
        <Button onClick={() => handleClick()}>Nouvelle Catégorie</Button>
        <Button onClick={() => handleDelete()}>Effacer</Button>
      </Box>

      {tableau.map((tableaux) => (
        <div key={tableaux.id}>
          <Font>
            {" "}
            {/* Je n'ai affiché qu'un tableau principal, qui s'ecrase à chaque fois qu'on change le nom */}
            <Sort>{tableaux.title}</Sort>
            <List />
          </Font>
        </div>
      ))}
    </Box>
  );
};

export default Tableau;
