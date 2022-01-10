import React, { useEffect, useState } from "react";
import axios from "axios";
import StarshipItem from "./StarshipItem";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

const StarshipListStyle = styled.div`
  margin: auto 15%;
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

  return (
    <StarshipListStyle>
      <InfiniteScroll
        dataLength={items.length}
        next={()=> {if (page<4){setPage(page + 1)}}}
        hasMore={true}
      >
        {items.map((item, index) => (
          <StarshipItem key={index} item={item} />
        ))}
      </InfiniteScroll>
    </StarshipListStyle>
  );
}
