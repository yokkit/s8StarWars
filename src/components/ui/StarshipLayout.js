import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import StarshipFooter from "./StarshipFooter";
import StarshipHeader from "./StarshipHeader";
import StarshipMobileHeader from "./StarshipMobileHeader";

const TotalStyle = styled.div`
  background: url("/imgs/backgroundStar.png");
  color: #ddd;
  h1 {
    color: #ddd;
  }
`;
const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
};

const MainContents = styled.div`
  min-height: 65vh;
  margin: 5% 10%;
  /* max-width: 1324px; */
  @media (min-width: 1660px) {
    margin: 5% 15%;
  }
`;

export default function StarshipLayout(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <TotalStyle>
      {!isMobile && <StarshipHeader />}
      {isMobile && <StarshipMobileHeader />}
      <MainContents>{props.children}</MainContents>
      <StarshipFooter />
    </TotalStyle>
  );
}
