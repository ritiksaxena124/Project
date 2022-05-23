import React from "react";
import styled from "styled-components";
import CoursesCard from "./CoursesCard";
function CoursesSection() {
  return (
    <Wrapper>
      <Container>
        <Heading>Recommended Courses</Heading>
        <CoursesSectionContainer>
          <CoursesCard />
          <CoursesCard />

          <CoursesCard />

          <CoursesCard />
        </CoursesSectionContainer>
      </Container>
    </Wrapper>
  );
}

export default CoursesSection;

const Wrapper = styled.div`
  padding: 30px 0px 20px 0px;
`;
const Container = styled.div``;

const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;

const CoursesSectionContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
