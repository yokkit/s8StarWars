import React from "react";
import styled from "styled-components";
import { Box } from "@mui/system";
import SignIn from "../loginForm/SignIn";
import ModalUnstyled from "@mui/core/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 450,
  bgcolor: "#181818",
  border: "2px solid #181818",
  borderRadius: "10px",
  p: 2,
  px: 4,
  pb: 3,
};

const SignInModal = (props) => {
  return (
    <StyledModal
      aria-labelledby="sign-in-modal"
      aria-describedby="sign-in-modal"
      open={props.open}
      onClose={props.handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>
        <SignIn handleOpenRegister={props.handleOpenRegister} handleClose={props.handleClose}/>
      </Box>
    </StyledModal>
  );
};

export default SignInModal;
