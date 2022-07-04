import React from "react";
import { Font, Sort, Title, Box, Buttons, Input, NavLi } from "../style/styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LinkElem } from "../style/styled";

const Profil = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Try again");
  };

  return (
    <Box>
      <NavLi>
        {console.log(NavLink)}
        <LinkElem to="/">Back to Home</LinkElem>
      </NavLi>
      <Font>
        <Title>Mon Profil</Title>

        <Sort>Se Connecter</Sort>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></Input>
          <Buttons onClick={() => handleSubmit()}>Login</Buttons>
        </form>
      </Font>
    </Box>
  );
};

export default Profil;
