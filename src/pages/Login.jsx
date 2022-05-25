import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Bg from "../images/Login/bg.png";
import LoginImg from "../images/Login/login.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

function Login() {
  const dispatch = useDispatch();
  const { LoggedIn } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || data.status === 500 || !data) {
      window.alert("Login Failure");
    } else {
      LoggedIn();
      window.alert("Login Successful");
      navigate("/");
    }
  };

  return (
    <Container>
      <LoginContainer>
        <ImageContainer>
          <Image src={LoginImg} />
        </ImageContainer>
        <FormContainer method="POST">
          <Heading> Login </Heading>
          <InputEmail
            fullWidth
            id="filled-basic"
            label="Email"
            variant="filled"
            name="email"
            value={user.email}
            onChange={handleInputs}
          />
          <InputPassword
            type="password"
            fullWidth
            id="filled-basic"
            label="Password"
            variant="filled"
            name="password"
            value={user.password}
            onChange={handleInputs}
          />

          <StyledButton variant="contained" onClick={sendData}>
            Login
          </StyledButton>

          <CreateAccount>
            Doesn't have an account?
            <Link to="/signup">
              <span> Signup</span>
            </Link>
          </CreateAccount>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
}

export default Login;
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
  width: 100%;
  height: 100%;
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

const CreateAccount = styled.p`
  margin-top: 20px;
  font-size: 15px;
  color: #fff;
  span {
    color: #0d2333;
    cursor: pointer;
  }
`;
