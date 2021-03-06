import React from "react";
import styled from "styled-components";
import PracticeCard from "../components/PracticeCard";
import Bg from "../images/bg.png";
import Overlay from "../components/Overlay";
import card from "../images/practiceCard.png";
import bg from "../images/mockHerobg.png";

import { useSelector } from "react-redux";

function Practice() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <HeroSection>
            <HeroSectionWrapper>
              <LeftSide>
                <HeadingMockTest>Practice your Learning Here</HeadingMockTest>
                <Para>Lets Practice whatever you have learned</Para>
              </LeftSide>
              <RightSide>
                <Image src={card}></Image>
              </RightSide>
            </HeroSectionWrapper>
          </HeroSection>
          <Container>
            <Heading>Practice your learnings</Heading>
            <PracticeSectionContainer>
              <PracticeCard />

              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
            </PracticeSectionContainer>
          </Container>
        </>
      ) : (
        <>
          <Overlay />
          <HeroSection>
            <HeroSectionWrapper>
              <LeftSide>
                <HeadingMockTest>Practice your Learning Here</HeadingMockTest>
                <Para>Lets Practice whatever you have learned</Para>
              </LeftSide>
              <RightSide>
                <Image src={card}></Image>
              </RightSide>
            </HeroSectionWrapper>
          </HeroSection>
          <Container>
            <Heading>Practice your learnings</Heading>
            <PracticeSectionContainer>
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
              <PracticeCard />
            </PracticeSectionContainer>
          </Container>
        </>
      )}
    </Wrapper>
  );
}

export default Practice;

const Wrapper = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
const Container = styled.div`
  padding: 50x 70px 30px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
`;

const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
  text-transform: capitalize;
`;

const PracticeSectionContainer = styled.div`
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
