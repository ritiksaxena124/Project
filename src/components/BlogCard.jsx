import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

function BlogCard() {
  return (
    <Wrapper>
      <Container>
        <BlogsContainer>
          <Heading>Lorem ipsum dolor sit amet.</Heading>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            ipsa vitae asperiores ducimus molestiae fuga vel magnam rem eveniet
            nihil?
          </Desc>
          <StyledButton variant="contained">Explore Course</StyledButton>
        </BlogsContainer>
      </Container>
    </Wrapper>
  );
}

export default BlogCard;

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px 30px;
  background: #fdfffe;
  margin-top: 15px;
  @media screen and (max-width: 450px) {
    max-width: 390px;
    padding: 20px 10px;
    
  }
`;
const Container = styled.div``;

const BlogsContainer = styled.div``;

const Heading = styled.h2`
  color: #005656;
  font-size: 20px;
  text-transform: capitalize;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
const Desc = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-top: 7px;
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

const StyledButton = styled(Button)`
  font-size: 9px !important;
  background: #0c4d4d !important;
  margin-top: 20px !important;
`;
