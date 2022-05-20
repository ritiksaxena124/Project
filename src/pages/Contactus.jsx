import React from "react";
import styled from "styled-components";
import Bg from "../images/Desktop/bg.png";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function Contactus() {
  return (
    <Wrapper>
      <Container>
        <Form>
          <Heading>Contact us</Heading>
          <InputName fullWidth label="Name" id="fullWidth" />
          <InputEmail fullWidth label="Email" id="fullWidth" />
          <InputMessage fullWidth label="Enter Your Message" id="fullWidth" />
          <StyledButton variant="contained">Send</StyledButton>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default Contactus;

const Wrapper = styled.div`
  padding: 0px 70px;
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
`;
const Container = styled.div``;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Heading = styled.h1`
  text-align: center;
  color: #0C4D4D;
`;
const InputName = styled(TextField)`
  margin-top: 15px !important;
`;
const InputEmail = styled(TextField)`
  margin-top: 15px !important;
`;
const InputMessage = styled(TextField)`
  margin-top: 15px !important;
`;

const StyledButton = styled(Button)`
  font-size: 12px !important;
  background: #0c4d4d !important;
  margin-top: 10px !important;
  width: fit-content;
  margin: 10px auto !important;
`;
