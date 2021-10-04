import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import StarshipData from "./StarshipData";

export default function StarshipContent() {
  const { id } = useParams();
  const  [pageItem, setPageItem ] = useState({});
  useEffect(
    () => {
      axios
        .get(`https://swapi.dev/api/starships/${id}/`)
        .then((res) => {
          setPageItem(res.data);
        })
        .catch((error) => console.log("error", error));
    },
    // eslint-disable-next-line
    []
  );

  return <StarshipData pageItem={pageItem} id={id}/>

}
