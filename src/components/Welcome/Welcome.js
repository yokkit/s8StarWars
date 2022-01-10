import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import WelcomeButton from "./WelcomeButton";


const Container = styled.div`
  min-height: 65vh;
  max-width: 1324px;
  border-radius: 10px;
  background: url("/imgs/starships/13.png") no-repeat center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  padding: 10% 5%;
  @media (max-width: 768px) {
    justify-content:flex-start;
  }
  @media (min-width:1660px) {
    /* margin: 5% 15%; */
  }
`;

export default function Welcome() {
  const message = "Starship Data Banks";
  return (
    <Container>
            <PageTitle message={message} />
            <WelcomeButton />
    </Container>
  );
}
