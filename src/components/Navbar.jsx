import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuBtn from "./MenuBtn";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const { LoggedOut } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <Wrapper>
        <LogoContainer>
          <Link to="/">
            <Logo>StudySpace</Logo>
          </Link>
        </LogoContainer>
        <NavMenu>
          <NavMenuItems>
            <Link to="/">
              <Items>Home</Items>
            </Link>
            <Link to="/courses">
              <Items>Courses</Items>
            </Link>
            <Link to="/blogs">
              <Items>Blog</Items>
            </Link>
            <Link to="/practice">
              <Items>Practice</Items>
            </Link>
            <Link to="/test">
              <Items>Mock Test</Items>
            </Link>
            <Link to="/contact">
              <Items>Contact us</Items>
            </Link>
          </NavMenuItems>
        </NavMenu>
        <NavButtons>
          {isLoggedIn ? (
            <>
                <SignupBtn
                  onClick={() => {
                    LoggedOut();
                  }}
                >
                  Logout
                </SignupBtn>
            </>
          ) : (
            <>
              <Link to="login">
                <LoginBtn>Login</LoginBtn>
              </Link>
              <Link to="signup">
                <SignupBtn>Signup</SignupBtn>
              </Link>
            </>
          )}
        </NavButtons>
        <MenuBtn />
      </Wrapper>
    </>
  );
}

export default Navbar;

const Wrapper = styled.div`
  padding: 15px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  @media screen and (max-width: 450px) {
    padding: 15px 10px;
  }
`;
const LogoContainer = styled.div``;
const Logo = styled.h2`
  color: #005656;
  font-size: 30px;
  font-weight: 900;
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;

const NavMenu = styled.div`
  @media screen and (max-width: 968px) {
    display: none;
  }
`;
const NavMenuItems = styled.ul`
  display: flex;
`;
const Items = styled.p`
  cursor: pointer;
  padding: 3px 5px;
  margin-right: 15px;
`;

const NavButtons = styled.div`
  display: flex;
  @media screen and (max-width: 968px) {
    display: none;
  }
`;

const LoginBtn = styled(Button)`
  font-size: 15px !important;
  background: #0c4d4d !important;
  padding: 3px 15px !important;
  color: #ffff !important;
  margin-right: 10px !important;
  text-transform: none !important;
`;

const SignupBtn = styled(Button)`
  font-size: 15px !important;
  background: #9ca3af5e !important;
  padding: 3px 15px !important;
  color: black !important;
  margin-right: 10px !important;
  text-transform: none !important;
`;
