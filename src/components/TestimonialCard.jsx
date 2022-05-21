import React from "react";
import styled from "styled-components";
import Quotes from "../images/quotes.png";
function TestimonialCard() {
  return (
    <Wrapper>
      <Container>
        <QuotesContainer>
          <Quote src={Quotes} />
        </QuotesContainer>
        <Message>
          For everyone who wants to level up their #Coding and #Dev skills -
          seriously, this channel is for you! Both basic and advanced stacks are
          covered on this channel, and one can learn according to his skill
          levels. And the icing on the cake is, everything is available for
          free.
        </Message>
        <Name>Mr. X</Name>
      </Container>
    </Wrapper>
  );
}

export default TestimonialCard;
const Wrapper = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eefff7;
  padding: 10px 20px;
  min-width: 450px;
  border-radius: 7px;
  
`;
const QuotesContainer = styled.div`
  width: 40px;
`;
const Quote = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Message = styled.p`
  margin-top: 10px;
  font-size: 15px;
  line-height: 25px;
`;
const Name = styled.p`
  margin-top: 10px;
`;
