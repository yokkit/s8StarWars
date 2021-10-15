import React, {useState} from "react";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  background-color: #000;
  width: 40%;
  height: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
  @media (max-width: 430px) {
    width: 80%;
  }
`;

export default function BurgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          {props.children}
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}