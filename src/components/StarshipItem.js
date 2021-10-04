import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StarshipItemStyle = styled.div`
  border-radius: 5px;
  border: 1px solid #505050;
  padding: 1rem;
  margin: 0.5rem;
  background-color: #505050;
  a {
    text-decoration: none;
  }
  h2 {
    margin-top: 0;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
    color: #b5b5b5;
  }
`;

export default function StarshipItem(props) {
  return (
    <StarshipItemStyle key={props.index}>
      <Link to={`/starship/${props.item.url.split('/').slice(-2, -1).toString()}/`}>
        <h2>{props.item.name}</h2>
        <p>{props.item.model}</p>
      </Link>
    </StarshipItemStyle>
  );
}
