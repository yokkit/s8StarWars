import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const HeaderStyle = styled.header`
  text-align: center;
  font-weight: 500;
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  a {
    color: grey;
    text-decoration: none;
    &:hover {
      color: white;
      font-weight: bold;
    }
  }
`;

const BurgerMenuStyle = styled.div`
  grid-column: 1/2;
  padding-left: 2rem;
`;

const LogoArea = styled.div`
  grid-column: 2 / 3;
  margin: 1rem 0;
  width: 23px;
  img {
    width: 150px;
  }
`;

const RegisterStyle = styled.div`
  display: flex;
  div {
    margin: 1rem;
  }
`;
const StarshipNavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: left;
  div {
    margin: 1rem;
  }
`;

export default function StarshipHeader() {
  return (
    <React.Fragment>
      <HeaderStyle>
        <BurgerMenuStyle>
          <BurgerMenu>
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
          </BurgerMenu>
        </BurgerMenuStyle>
        <LogoArea>
          <picture>
            <img src="/logoSmall.png" alt="logo" />
          </picture>
        </LogoArea>
      </HeaderStyle>
    </React.Fragment>
  );
}
