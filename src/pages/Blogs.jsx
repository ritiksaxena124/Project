import React from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import Bg from "../images/bg.png";
import Overlay from "../components/Overlay";
import { useSelector } from "react-redux";
import card from "../images/blogsCard.png";
import bg from "../images/mockHerobg.png";
function Blogs() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <HeroSection>
            <HeroSectionWrapper>
              <LeftSide>
                <HeadingMockTest>Read Our Blogs to get Updated</HeadingMockTest>
                <Para></Para>
              </LeftSide>
              <RightSide>
                <Image src={card}></Image>
              </RightSide>
            </HeroSectionWrapper>
          </HeroSection>
          <Container>
            <Heading>Blogs</Heading>
            <BlogsContainer>
              <BlogCard />

              <BlogCard />

              <BlogCard />

              <BlogCard />
            </BlogsContainer>
          </Container>
        </>
      ) : (
        <>
          <Overlay />
          <HeroSection>
            <HeroSectionWrapper>
              <LeftSide>
                <HeadingMockTest>Read Our Blogs to get Updated</HeadingMockTest>
                <Para></Para>
              </LeftSide>
              <RightSide>
                <Image src={card}></Image>
              </RightSide>
            </HeroSectionWrapper>
          </HeroSection>
          <Container>
            <Heading>Blogs</Heading>
            <BlogsContainer>
              <BlogCard />

              <BlogCard />

              <BlogCard />

              <BlogCard />
            </BlogsContainer>
          </Container>
        </>
      )}
    </Wrapper>
  );
}

export default Blogs;

const Wrapper = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding-bottom: 30px;
  min-height: calc(100vh - 110px);
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
    margin-bottom: 20px;
  }
`;
const Container = styled.div`
  padding: 50x 70px 30px 70px;
`;

const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
  text-transform: capitalize;
  padding-top: 50px;
`;

const BlogsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  place-items: center;
  padding: 0px 70px;
`;

const HeroSection = styled.div`
  height: 500px;
  width: 100%;
  background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;
const HeroSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 50px 0px 70px;
`;
const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 50px;
`;
const HeadingMockTest = styled.h1`
  color: #fff;
  text-align: left;
  font-size: 50px;
`;
const Para = styled.p`
  color: #fff;
  margin-top: 20px;
  font-size: 25px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
