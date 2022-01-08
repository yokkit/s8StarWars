import React from "react";
import styled from "styled-components";
import { Box } from "@mui/system";
import Register from "./Register";
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

const RegisterModal = (props) => {
  return (
    <StyledModal
      aria-labelledby="register-in-modal"
      aria-describedby="register-in-modal"
      open={props.openRegister}
      onClose={props.handleCloseRegister}
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>
        <Register handleOpen={props.handleOpen} handleCloseRegister={props.handleCloseRegister} />
      </Box>
    </StyledModal>
  );
};

export default RegisterModal;
