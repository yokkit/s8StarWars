import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderStyle = styled.header`
  text-align: center;
  font-weight: 500;
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: repeat(3, 1fr);
  a {
    color: grey;
    text-decoration: none;
    &:hover {
      color: white;
      font-weight: bold;
    }
  }
`;

const LogoArea = styled.div`
  margin: 1rem;
  grid-column: 1 / 5;
  grid-row: 1/3;
  img {
    width: 150px;
  }
`;

const RegisterStyle = styled.div`
  grid-column: 4 / 5;
  grid-row: 2;
  display: flex;
  justify-content: end;
  padding-right: 1rem;
  div {
    margin: 1rem;
  }
`;
const StarshipNavbarStyled = styled.nav`
  grid-column: 1 / 5;
  grid-row: 3;
  display: flex;
  justify-content: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  div {
    padding: 1rem;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    margin: 0 0 0 -1px;
    border-bottom: 2px solid transparent;
    transition: all 280ms ease-in-out;
    &:hover {
      border-bottom: 2px solid red;
    }
  }
`;

export default function StarshipHeader() {
  return (
    <HeaderStyle>
      <LogoArea>
          <img src="/logoBig.png" alt="logo" />
      </LogoArea>
      <RegisterStyle>
        <div>
          <NavLink to="#">Log In</NavLink>
        </div>
        <div>
          <NavLink to="#">Sign Up</NavLink>
        </div>
      </RegisterStyle>
      <StarshipNavbarStyled>
        <div>
          <NavLink to="/">HOME</NavLink>
        </div>
        <div>
          <NavLink to="/starships">STARSHIPS</NavLink>
        </div>
      </StarshipNavbarStyled>
    </HeaderStyle>
  );
}
