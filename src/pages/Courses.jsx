import React from "react";
import styled from "styled-components";
import CoursesCard from "../components/CoursesCard";
import Bg from "../images/bg.png";
import { useSelector } from "react-redux";
import Overlay from "../components/Overlay";
import card from "../images/coursesCard.png";
import bg from "../images/mockHerobg.png";
function Courses() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <HeroSection>
            <HeroSectionWrapper>
              <LeftSide>
                <HeadingMockTest>Explore our Courses</HeadingMockTest>
                <Para>
                  Learn from our Free Courses and Practice in our Mock Test
                  Section
                </Para>
              </LeftSide>
              <RightSide>
                <Image src={card}></Image>
              </RightSide>
            </HeroSectionWrapper>
          </HeroSection>
          <Container>
            <Heading>Offered Courses</Heading>
            <CoursesSectionContainer>
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
            </CoursesSectionContainer>
          </Container>
        </>
      ) : (
        <>
          <Overlay />
          <HeroSection>
            <HeroSectionWrapper>
              <LeftSide>
                <HeadingMockTest>Explore our Courses</HeadingMockTest>
                <Para>
                  Learn from our Free Courses and Practice in our Mock Test
                  Section
                </Para>
              </LeftSide>
              <RightSide>
                <Image src={card}></Image>
              </RightSide>
            </HeroSectionWrapper>
          </HeroSection>
          <Container>
            <Heading>Offered Courses</Heading>
            <CoursesSectionContainer>
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
            </CoursesSectionContainer>
          </Container>
        </>
      )}
    </Wrapper>
  );
}

export default Courses;

const Wrapper = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  @media screen and (max-width: 450px) {
    padding: 0px 30px;
  }
`;
const Container = styled.div`
  padding: 50x 70px 30px 70px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 30px;
`;

const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
  text-transform: capitalize;
  padding-top: 50px;
`;

const CoursesSectionContainer = styled.div`
  margin-top: 20px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1400px) {
    margin-top: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 7px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 10px;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 7px;
  }
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
