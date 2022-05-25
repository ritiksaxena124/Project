import React from "react";
import styled from "styled-components";
import CoursesSection from "../components/CoursesSection";
import DevelopersSection from "../components/DevelopersSection";
import HeroSection from "../components/HeroSection";
import TestimonialSection from "../components/TestimonialSection";
import Bg from "../images/bg.png";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <Wrapper>
        <HeroSection />
        <Container>
          <Fade triggerOnce>
            <CoursesSection />
            <TestimonialSection />
            <DevelopersSection />
          </Fade>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;

const Wrapper = styled.div``;
const Container = styled.div`
  padding: 0px 70px;
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  @media screen and (max-width: 800px) {
    padding: 0px 30px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
    background: none;
  }
`;
