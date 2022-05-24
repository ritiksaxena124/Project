import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Bg from "../images/Login/bg.png";
import SignupImg from "../images/Login/signup.jpg";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        cPassword: user.cPassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || data.status === 500 || !data) {
      window.alert("Registration Failure");
    } else {
      window.alert("Registration Successful");
      navigate("/login");
    }
  };

  return (
    <Container>
      <LoginContainer>
        <ImageContainer>
          <Image src={SignupImg} />
        </ImageContainer>

        <FormContainer method="POST">
          <Heading> Signup </Heading>
          <InputField
            fullWidth
            id="filled-basic"
            label="Full Name"
            variant="filled"
            name="name"
            value={user.name}
            onChange={handleInputs}
          />
          <InputField
            type="email"
            fullWidth
            id="filled-basic"
            label="Email"
            variant="filled"
            name="email"
            value={user.email}
            onChange={handleInputs}
          />
          <InputField
            type="password"
            fullWidth
            id="filled-basic"
            label="Password"
            variant="filled"
            name="password"
            value={user.password}
            onChange={handleInputs}
          />
          <InputField
            type="password"
            fullWidth
            id="filled-basic"
            label="Confirm Password"
            variant="filled"
            name="cPassword"
            value={user.cPassword}
            onChange={handleInputs}
          />
          <StyledButton variant="contained" onClick={sendData}>
            Create Account
          </StyledButton>
        </FormContainer>
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
  min-height: calc(100vh - 110px);
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
  @media screen and (max-width: 450px) {
    width: 400px;
    margin: 10px;
    flex-direction: column;
  }
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
const FormContainer = styled.form`
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

const InputField = styled(TextField)`
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
