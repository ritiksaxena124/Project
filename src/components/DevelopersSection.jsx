import React from "react";
import styled from "styled-components";
import DeveloperCard from "./DeveloperCard";
function DevelopersSection() {
  return (
    <Wrapper>
      <Container>
        <Heading>Meet Our Developers</Heading>
        <DevelopersCardContainer>
          <DeveloperCard />

          <DeveloperCard />

          <DeveloperCard />

          <DeveloperCard />
        </DevelopersCardContainer>
      </Container>
    </Wrapper>
  );
}

export default DevelopersSection;

const Wrapper = styled.div`
  padding: 30px 0px 20px 0px;
`;
const Container = styled.div``;

const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
  @media screen and (max-width: 450px) {
   font-size: 25px;
  }
`;
const DevelopersCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
