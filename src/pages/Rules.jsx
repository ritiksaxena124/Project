import React from "react";
import styled from "styled-components";
import Bg from "../images/bg.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <Wrapper>
      <Container>
        <Heading>Rules &amp; Regulations</Heading>
        <RulesSectionContainer>
          <RulesList>
            <Rule>
              The examination will comprise of Objective type Multiple Choice
              Questions (MCQs)
            </Rule>
            <Rule>All questions are compulsory and each carries One mark.</Rule>
            <Rule>
              The Subjects or topics covered in the exam will be as per the
              Syllabus.
            </Rule>
            <Rule>
              There will be NO NEGATIVE MARKING for the wrong answers.
            </Rule>
            <Rule>
              Every student will take the examination on a Laptop/Desktop.
            </Rule>
            <Rule>
              The students just need to click on the Right Choice / Correct
              option from the multiple choices /options given with each
              question. For Multiple Choice Questions, each question has four
              options, and the candidate has to click the appropriate option.{" "}
            </Rule>
          </RulesList>
          <Link to="/test/rules/start-test">
            <StyledButton variant="contained">Start Test</StyledButton>
          </Link>
        </RulesSectionContainer>
      </Container>
    </Wrapper>
  );
}

export default Rules;

const Wrapper = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: calc(100vh - 110px);
`;
const Container = styled.div`
  padding-top: 50px;
  padding: 50px 70px 30px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Heading = styled.h2`
  text-align: center;
  color: #005656;
  font-size: 30px;
  text-transform: capitalize;
`;
const RulesSectionContainer = styled.div`
  width: 900px;
  padding: 20px 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  background-color: #ffff;
`;
const RulesList = styled.ol``;
const Rule = styled.li`
  margin: 15px;
  line-height: 25px;
`;
const StyledButton = styled(Button)`
  display: block !important;
  font-size: 12px !important;
  background: #0c4d4d !important;
  margin: 50px auto 10px auto !important;
`;
