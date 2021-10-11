import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";
import StarshipData from "./StarshipData";

const ErrorMessageStyle = styled.div`
    margin: 25% 10%;
    text-align:center;
  `;

export default function StarshipContent() {
  const { id } = useParams();
  const  [pageItem, setPageItem ] = useState({});
  const [isShow, setIsShow] = useState(true);
  useEffect(
    () => {
      axios
        .get(`https://swapi.dev/api/starships/${id}/`)
        .then((res) => {
          setPageItem(res.data);
        })
        .catch((error) => {
          console.log("error", error);
          setIsShow(false);
        });
        return (()=>{setPageItem({})})
    },
    // eslint-disable-next-line
    []
  );

  return isShow?<StarshipData pageItem={pageItem} id={id}/>:<ErrorMessageStyle>Not found</ErrorMessageStyle>
}
