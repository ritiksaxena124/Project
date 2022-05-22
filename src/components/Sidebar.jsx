import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SS from "../images/SS.png";
import Button from "@mui/material/Button";

const Sidebar = ({ action }) => {
  return (
    <>
      <Container action={action}>
        <LeftSide>
          <LogoContainer>
            <Logo src={SS} />
          </LogoContainer>
          <MenuItemsContainer>
            <ItemsList>
              <Link to="/">
                <Item>Home</Item>
              </Link>
              <Link to="/courses">
                <Item>Courses</Item>
              </Link>
              <Link to="/blogs">
                <Item>Blog</Item>
              </Link>
              <Link to="/practice">
                <Item>Practice</Item>
              </Link>
              <Link to="/contact">
                <Item>Contact us</Item>
              </Link>
            </ItemsList>
          </MenuItemsContainer>
          <NavButtons>
            <Link to="/login">
              <LoginBtn>Login</LoginBtn>
            </Link>
            <Link to="/signup">
              <SignupBtn>Signup</SignupBtn>
            </Link>
          </NavButtons>
        </LeftSide>
      </Container>
    </>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 250px;
  background: #ffff;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  position: fixed;
  top: 0;
  transform: ${(props) =>
    props.action ? "translateX(-80px)" : "translateX(-500px)"};

  @media screen and (max-width: 450px) {
    transform: ${(props) =>
      props.action ? "translateX(-10px)" : "translateX(-400px)"};
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
`;
const Logo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const MenuItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ItemsList = styled.ul``;
const Item = styled.p`
  position: relative;
  text-transform: capitalize;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 1em;
  color: #111111;
  padding: 10px 12px;
  margin-top: 20px;
  border-radius: 3;
  border-bottom: 1px solid #0c4c4c;
  text-align: center;
  cursor: pointer;
`;

const NavButtons = styled.div`
  margin: 100px 10px;
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
  text-transform: none !important;
`;
