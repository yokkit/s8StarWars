import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import StarshipFooter from "./StarshipFooter";
import StarshipHeader from "./StarshipHeader";
import StarshipMobileHeader from "./StarshipMobileHeader";

const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
};

const MainContents = styled.div`
  min-height: 65vh;
`;

export default function StarshipLayout(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <React.Fragment>
      {!isMobile && <StarshipHeader />}
      {isMobile && <StarshipMobileHeader />}
      <MainContents>
        {props.children}
      </MainContents>
      <StarshipFooter />
    </React.Fragment>
  );
}
