import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import StarshipFooter from "./StarshipFooter";
import StarshipHeader from "./StarshipHeader";
import StarshipMobileHeader from "./StarshipMobileHeader";
import SignInModal from "../loginForm/SignInModal";
import RegisterModal from "../loginForm/RegisterModal";

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
// open and close of Login screen
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openRegister, setOpenRegister] = useState(false);
  const handleOpenRegister = () =>setOpenRegister(true);
  const handleCloseRegister = ()=>setOpenRegister(false);
  

  return (
    <TotalStyle>
      <SignInModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        handleOpenRegister={handleOpenRegister}
      />
      <RegisterModal
        handleOpenRegister={handleOpenRegister}
        handleCloseRegister={handleCloseRegister}
        openRegister={openRegister}
        handleOpen={handleOpen}
      />
      {!isMobile && <StarshipHeader handleOpen={handleOpen} handleOpenRegister={handleOpenRegister}/>}
      {isMobile && <StarshipMobileHeader handleOpen={handleOpen} open={open} handleOpenRegister={handleOpenRegister} openRegister={openRegister}/>}
      <MainContents>{props.children}</MainContents>
      <StarshipFooter />
    </TotalStyle>
  );
}
