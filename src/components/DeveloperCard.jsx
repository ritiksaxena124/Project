import React from "react";
import styled from "styled-components";
function DeveloperCard() {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <Info>
          <Name>Ritik Saxena</Name>
          <Designation>Project Head</Designation>
        </Info>
      </Container>
    </Wrapper>
  );
}
export default DeveloperCard;
const Wrapper = styled.div`
  margin: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

`;
const Container = styled.div`
  width: 300px;
  min-height: 300px;
  border-radius: 7px;
  background: #ffff;
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
  display: grid;
  place-items: center;
  padding: 20px 10px 20px 10px;
`;
const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const Designation = styled.p`
  font-size: 15px;
  margin-top: 7px;
`;
