import React from "react";
import styled from "styled-components";
import HeroBg from "../images/herobg.png";
import TabletHerobg from "../images/Tablet/herobg.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <ContentBox>
            <Heading>
              Welcome to <p> StudySpace </p>
            </Heading>
            <Content>
              Confused on which course to take? I have got you covered. Browse
              courses and find out the best course for you.
            </Content>
            <Buttons>
              <Link to="courses">
              <CoursesBtn variant="contained">Free Courses</CoursesBtn>
              </Link>
              <Link to="/blogs">
              <BlogsBtn variant="contained">Explore Blogs</BlogsBtn>
              </Link>

            </Buttons>
          </ContentBox>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default HeroSection;

const Wrapper = styled.div`
  background: url(${HeroBg});
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-transform: capitalize;

  @media screen and (max-width: 1450px) {
    background: url(${TabletHerobg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 450px) {
   background: none;
   height: 450px;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 70px;
  max-width: 750px;
  max-height: 400px;
  padding: 30px 20px;

  @media screen and (max-width: 1450px) {
    margin: 10px 60px;
    width: 550px;
  }
  @media screen and (max-width: 450px) {
    width: 400px;
    margin: 10px;
  }
`;
const Heading = styled.h1`
  font-size: 50px;
  display: flex;
  font-weight: 300;
  p {
    margin-left: 12px;
    color: #0c4d4d;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  @media screen and (max-width: 1450px) {
    font-size: 40px;
  }
  @media screen and (max-width: 450px) {
   font-size: 25px;
   display: flex;
   justify-content:center;
   p{
     font-size: 27px;
     margin-left: 10px;
   }
  }
`;
const Content = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #000000a6;
  line-height: 30px;
  @media screen and (max-width: 1450px) {
    font-size: 18px;
  }
  @media screen and (max-width: 450px) {
   font-size: 15px;
   line-height: 25px;
   text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;
  @media screen and (max-width: 450px) {
   font-size: 20px;
   justify-content: center;
  }
`;

const CoursesBtn = styled(Button)`
  font-size: 15px !important;
  background: #0c4d4d !important;
  margin-top: 10px !important;
  padding: 3px 15px !important;
  color: #ffff !important;
  margin-right: 10px !important;
  text-transform: none !important;
`;

const BlogsBtn = styled(Button)`
  font-size: 15px !important;
  background: #9ca3af5e !important;
  margin-top: 10px !important;
  padding: 3px 15px !important;
  color: black !important;
  margin-right: 10px !important;
  text-transform: none !important;
`;
