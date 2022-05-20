import React from "react";
import styled from "styled-components";
import CoursesCard from "../components/CoursesCard";
import Bg from "../images/bg.png";
function Courses() {
  return (
    <Wrapper>
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
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
        </CoursesSectionContainer>
      </Container>
    </Wrapper>
  );
}

export default Courses;

const Wrapper = styled.div`
margin-top: 50px;
  padding: 0px 70px;
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
const Container = styled.div``;

const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
  text-transform: capitalize;
`;

const CoursesSectionContainer = styled.div`
  margin-top: 20px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
