import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../app/provider";

export const LinkStyle = styled.div`
  color: grey;
  text-decoration: none;
  width: 100%;
  &:hover {
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

const HeaderLogin = (props) => {
  const [isLogin, setIsLogin] = useContext(AppContext);
  const handleSignOut = () => {
    setIsLogin(false);
    console.log("Now you are sign out!");
  };
  return (
    <>
      {!isLogin && (
        <>
          <div>
            <LinkStyle onClick={props.handleOpen}>Log In</LinkStyle>
          </div>
          <div>
            <LinkStyle onClick={props.handleOpenRegister}>Sign Up</LinkStyle>
          </div>
        </>
      )}
      {isLogin && (
        <div>
          <LinkStyle onClick={handleSignOut}>Sign Out</LinkStyle>
        </div>
      )}
    </>
  );
};

export default HeaderLogin;
