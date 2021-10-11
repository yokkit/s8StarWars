import "./App.css";
import Router from "./app/router";
import React from "react";
import styled from "styled-components";


const AppStyled = styled.div`
  background: url('/imgs/backgroundStar.png');
  color: #DDD;
`;

function App() {
  return <AppStyled><Router /></AppStyled>;
}

export default App;
