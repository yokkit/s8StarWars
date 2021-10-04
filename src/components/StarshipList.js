import React, { useEffect, useState } from "react";
import axios from "axios";
import StarshipItem from "./StarshipItem";
import styled from "styled-components";

const StarshipListStyle = styled.div`
  margin: auto 15%;
`;

export default function StarshipList() {
  const [items, setItems] = useState([]);

  useEffect(
    () => {
      axios
        .get(`https://swapi.dev/api/starships/?page=1`)
        .then(res => {
          setItems([...items, ...res.data.results]);
        })
        .catch(error => console.log("error", error));
    },
    // eslint-disable-next-line
    []
  );

  return (
    <StarshipListStyle>
      {items.map((item, index) => (
        <StarshipItem key={index} item={item} />
      ))}
    </StarshipListStyle>
  );
}
