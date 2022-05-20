import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

function CoursesCard() {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <Info>
          <CourseName>Ritik Saxena</CourseName>
          <Desc>Project Head</Desc>
          <StyledButton variant="contained">Explore Course</StyledButton>
        </Info>
      </Container>
    </Wrapper>
  );
}

export default CoursesCard;
const Wrapper = styled.div`
  margin: 10px;
`;
const Container = styled.div`
  width: 300px;
  min-height: 300px;
  border: 1px solid green;
  border-radius: 7px;
  background: #ffff;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 450px) {

  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #c4c4c4;
  border-radius: 7px 7px 0px 0px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px 7px 0px 0px;
`;
const Info = styled.div`
  padding: 20px 15px 15px 15px;

`;
const CourseName = styled.p`
  font-size: 20px;
  font-weight: bold;

`;
const Desc = styled.p`
  font-size: 13px;
  margin-top: 7px;
`;

const StyledButton = styled(Button)`
  font-size: 9px !important;
  background: #0c4d4d !important;
  margin-top: 10px !important;
`;
