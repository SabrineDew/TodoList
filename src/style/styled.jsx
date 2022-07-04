import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkElem = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none ${(props) => console.log(props)};
  color: #ffffff;

  &:hover {
    color: ${(props) => props.theme.white};
  }
`;

export const Title = styled.h1`
  -webkit-box-shadow: -6px -5px 13px -10px #882192;
  box-shadow: -6px -5px 13px -10px #882192;
  background: #cc6a1a;
  color: #ffffff;
  text-align: center;
  padding: 2%;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  text-transform: uppercase;
`;

//tableau titre

export const Sort = styled.h1`
  background: #903aa3;
  -moz-transform: scale(0.9) rotate(-1deg);
  -webkit-transform: scale(0.9) rotate(-1deg);
  -o-transform: scale(0.9) rotate(-1deg);
  -ms-transform: scale(0.9) rotate(-1deg);
  transform: scale(0.9) rotate(-1deg);
  border: 1px dotted #9a68a5;
  color: #ffffff;
  width: auto;
  margin: auto;
  margin-bottom: 2%;
  padding: 2%;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  text-transform: uppercase;
`;

//div

export const Box = styled.nav`
  text-align: center;
  padding: 1%;
`;

export const Navi = styled.nav`
  text-align: center;
  padding: 1%;
  color: white;
  text-transform: none;
`;

//post it
export const Box2 = styled.nav`
  text-align: center;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
`;

// Link Naviguation

export const NavLi = styled.span`
  padding: 0.1%;
  margin: 1%;
  align-item: center;
  justify-content: space-around;
  text-decoration: none;
  border: 1px dotted #903aa3;
  border-radius: 8px 15px 18px 10px;
  padding: 1%;
  margin: 1%;
  background: #cc6a1a;

  &:hover {
    background: #903aa3;
  }
`;

//mise en page

export const Font = styled.body`
  background-color: #cc6a1a;

  border-radius: 8px 15px 18px 10px;
`;

export const FontListe = styled.div`
  -webkit-box-shadow: -6px -5px 13px -10px #882192;
  box-shadow: -6px -5px 13px -10px #882192;
  background: #9a68a5;
  color: #ffffff;
  text-align: center;
  width: 25%;
  display: flex;
  flex-wrap: nowrap;
  padding: 1%;
  margin: 1% auto;
  justify-content: center;
`;

//Style des boutons

export const Button = styled.button`
  border: 1px dotted #903aa3;
  border-radius: 8px 15px 18px 10px;
  padding: 1%;
  margin: 1%;
  background: #cc6a1a;

  &:hover {
    background: #903aa3;
    -moz-transform: scale(0.9) rotate(5deg);
    -webkit-transform: scale(0.9) rotate(5deg);
    -o-transform: scale(0.9) rotate(5deg);
    -ms-transform: scale(0.9) rotate(5deg);
    transform: scale(0.9) rotate(5deg);
  }
`;

export const Buttons = styled.button`
  border: 1px dotted #903aa3;
  border-radius: 8px 15px 18px 10px;
  padding: 1%;
  margin: 1%;
  background-color: #ffffff;

  &:hover {
    background: #903aa3;
    -moz-transform: scale(0.9) rotate(-5deg);
    -webkit-transform: scale(0.9) rotate(-5deg);
    -o-transform: scale(0.9) rotate(-5deg);
    -ms-transform: scale(0.9) rotate(-5deg);
    transform: scale(0.9) rotate(-5deg);
  }
`;

//style de l'input Tableau et List

export const Input = styled.input`
font-size: 12px;
padding: 10px;
margin: 10px;
background: papayawhip;
border: none;
border-radius: 3px;
::placeholder {
  color: palevioletred;
`;

//style de l'input Todo

export const Input2 = styled.input`
font-size: 10px;
padding: 5px;
margin: 5px;
background: papayawhip;
border: none;
border-radius: 3px;
::placeholder {
  color: palevioletred;
`;
