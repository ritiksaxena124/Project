import React from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import Bg from "../images/bg.png";
function Blogs() {
  return (
    <Wrapper>
      <Container>
        <Heading>Blogs</Heading>
        <BlogsContainer>
          <BlogCard />

          <BlogCard />

          <BlogCard />

          <BlogCard />
        </BlogsContainer>

      </Container>
    </Wrapper>
  );
}

export default Blogs;

const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0px 70px;
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding-bottom: 30px;
  @media screen and (max-width: 450px) {
    padding: 0px 30px;
  }
`;
const Container = styled.div``;

const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
  text-transform: capitalize;
`;

const BlogsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  place-items: center;
`;
