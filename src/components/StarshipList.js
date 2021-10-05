import React, { useEffect, useState } from "react";
import axios from "axios";
import StarshipItem from "./StarshipItem";
import styled from "styled-components";

const StarshipListStyle = styled.div`
  margin: 0 20% 10%;
`;

export default function StarshipList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(
    () => {
      axios
        .get(`https://swapi.dev/api/starships/?page=${page}`)
        .then((res) => {
          setItems([...items, ...res.data.results]);
        })
        .catch((error) => console.log("error", error));
    },
    // eslint-disable-next-line
    [page]
  );
  const changeNextPage = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  return (
    <StarshipListStyle>
      {items.map((item, index) => (
        <StarshipItem key={index} item={item} />
      ))}
      <button onClick={changeNextPage}>Ver más</button>
    </StarshipListStyle>
  );
}
