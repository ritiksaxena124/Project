import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Overlay() {
  return (
    <Wrapper>
      <Container>
        <WarningWrapper>
          <Text>Please Login to continue</Text>
          <Link to="/login">
            <LoginBtn>Login</LoginBtn>
          </Link>
        </WarningWrapper>
      </Container>
    </Wrapper>
  );
}

export default Overlay;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Container = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
const WarningWrapper = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 20px 50px;
  border-radius: 3px;
  width: 800px;
  height: 400px;
  display: grid;
  place-items: center;
  @media screen and (max-width: 450px) {
    width: 350px;
    height: 200px;
  }
`;
const Text = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    font-size: 20px;
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
