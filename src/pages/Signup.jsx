import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Bg from "../images/Login/bg.png";
import SignupImg from "../images/Login/signup.jpg";


function Signup() {
  return (
    <Container>
      <LoginContainer>

      <FormContainer>
          <Heading> Signup </Heading>
          <InputEmail
            fullWidth
            id="filled-basic"
            label="Full Name"
            variant="filled"
          />
          <InputEmail
            fullWidth
            id="filled-basic"
            label="Email"
            variant="filled"
          />
          <InputPassword
            fullWidth
            id="filled-basic"
            label="Password"
            variant="filled"
          />
          <InputEmail
            fullWidth
            id="filled-basic"
            label="Confirm Password"
            variant="filled"
          />
          <StyledButton variant="contained">Create Account</StyledButton>
        </FormContainer>

        <ImageContainer>
          <Image src={SignupImg}/>
        </ImageContainer>
       
      </LoginContainer>
    </Container>
  );
}

export default Signup;
const Container = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginContainer = styled.div`
  width: 1000px;
  display: flex;
  border-radius: 3px;
  background-color: rgba(0, 86, 86, 0.6);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 450px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 50px;
`;
const Heading = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 40px;
`;

const InputEmail = styled(TextField)`
  margin-top: 15px !important;
  background-color: #fff;
  border-radius: 3px;
`;
const InputPassword = styled(TextField)`
  margin-top: 15px !important;
  background-color: #fff;
  border-radius: 3px;
`;

const StyledButton = styled(Button)`
  font-size: 12px !important;
  background: #0c4d4d !important;
  margin: 10px !important;
  width: fit-content;
  margin-top: 20px !important;
`;
