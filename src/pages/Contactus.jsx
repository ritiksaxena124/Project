import React from "react";
import styled from "styled-components";
import Bg from "../images/Desktop/bg.png";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import ContactImg from "../images/Android/contact.png";

function Contactus() {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image src={ContactImg} />
        </ImageContainer>
        <Form>
          <Heading>Contact us</Heading>
          <InputName fullWidth
            id="filled-basic"
            label="Name"
            variant="filled" />
          <InputEmail fullWidth
            id="filled-basic"
            label="Email"
            variant="filled" />
          <InputMessage fullWidth
            id="filled-basic"
            label="Enter Your Message"
            variant="filled" />
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
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 450px) {
    width: 400px;
    background: none;
    height: 100vh;
    padding: 0 10px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 86, 86, 0.6);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px 50px;
  @media screen and (max-width: 450px) {
    width: 350px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 450px;
  background: #ffff;
  @media screen and (max-width: 450px) {
    width: 350px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Heading = styled.h1`
  text-align: center;
  color: #ffff;
`;
const InputName = styled(TextField)`
  margin-top: 15px !important;
  background: #ffff;
  border-radius: 3px;
  border:none !important;
`;
const InputEmail = styled(TextField)`
  margin-top: 15px !important;
  background: #ffff;
  border-radius: 3px;
`;
const InputMessage = styled(TextField)`
  margin-top: 15px !important;
  background: #ffff;
  border-radius: 3px;

`;

const StyledButton = styled(Button)`
  font-size: 12px !important;
  background: #0c4d4d !important;
  margin-top: 10px !important;
  width: fit-content;
  margin: 10px auto !important;
`;
