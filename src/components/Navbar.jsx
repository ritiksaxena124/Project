import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <>
      <Wrapper>
        <LogoContainer>
          <Logo>StudySpace</Logo>
        </LogoContainer>
        <NavMenuWrapper>
          <NavMenu>
            <NavMenuItems>
              <Items>Home</Items>
              <Items>Courses</Items>
              <Items>Blog</Items>
              <Items>Practice</Items>
              <Items>Contact us</Items>
            </NavMenuItems>
          </NavMenu>
          <NavButtons>
            <LoginBtn>Login</LoginBtn>
            <SignupBtn>Signup</SignupBtn>
          </NavButtons>
        </NavMenuWrapper>
      </Wrapper>
    </>
  );
}

export default Navbar;

const Wrapper = styled.div`
  padding: 0px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
const LogoContainer = styled.div``;
const Logo = styled.h2`
  color: #005656;
  font-size: 30px;
`;
const NavMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
`;

const NavMenu = styled.div``;
const NavMenuItems = styled.ul`
  display: flex;
`;
const Items = styled.p`
  cursor: pointer;
  padding: 3px 5px;
  margin-right: 15px;
  padding: 8.5px 10px;
`;

const NavButtons = styled.div`
  display: flex;
  margin: 20px 15px;
`;


const LoginBtn = styled(Button)`
  font-size: 15px !important;
  background: #0c4d4d !important;
  margin-top: 10px !important;
  padding: 3px 15px !important;
  color: #ffff !important;
  margin-right: 10px !important;
  text-transform: none !important;
`;


const SignupBtn = styled(Button)`
  font-size: 15px !important;
  background: #9ca3af5e !important;
  margin-top: 10px !important;
  padding: 3px 15px !important;
  color: black !important;
  margin-right: 10px !important;
  text-transform: none !important;
`;
