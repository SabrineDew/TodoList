import React from "react";
import { NavLink } from "react-router-dom";
import { NavLi, Title } from "../style/styled";
import { Box, Sort } from "../style/styled";
import { LinkElem } from "../style/styled";

const Home = () => {
  return (
    <Box>
      <Title>Page d'Accueil</Title>
      <NavLi>
        {/* Les Console log de Navlink sont là pour faire disparaitre les erreur de eslint */}
        {console.log(NavLink)}
        <LinkElem to="/">Home</LinkElem>
      </NavLi>
      <NavLi>
        <LinkElem to="/todolist">TodoList</LinkElem>{" "}
      </NavLi>
      <NavLi>
        <LinkElem to="/profil">Profil</LinkElem>
      </NavLi>
      <Sort>Bienvenue dans la page D'accueil</Sort>
    </Box>
  );
};

export default Home;
