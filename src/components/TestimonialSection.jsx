import React from "react";
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";
function TestimonialSection() {
  return (
    <Wrapper>
      <Container>
        <Heading>Testimonials</Heading>
        <TestimonialContainer>
          <TestimonialCard />
          <TestimonialCard />

          <TestimonialCard />

          <TestimonialCard />
        </TestimonialContainer>
      </Container>
    </Wrapper>
  );
}

export default TestimonialSection;

const Wrapper = styled.div`
  padding: 30px 0px 20px 0px;
`;
const Container = styled.div``;

const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
`;

const TestimonialContainer = styled.div`
padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  place-items: center;
`;
