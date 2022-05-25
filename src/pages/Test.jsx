import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Bg from "../images/bg.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Test() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        {
          answerText: "New York",
          isCorrect: false,
        },
        {
          answerText: "London",
          isCorrect: false,
        },
        {
          answerText: "Paris",
          isCorrect: true,
        },
        {
          answerText: "Dublin",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla?",
      answerOptions: [
        {
          answerText: "Jeff Bezos",
          isCorrect: false,
        },
        {
          answerText: "Elon Musk",
          isCorrect: true,
        },
        {
          answerText: "Bill Gates",
          isCorrect: false,
        },
        {
          answerText: "Tony Stark",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [questionEnd, setQuestionEnd] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer(0);
      goToNextQuestion(false);
    }, 10 * 1000); // 60 seconds
  }, [currentQuestion]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const goToNextQuestion = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      let nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
    } else {
      setQuestionEnd(true);
    }
  };

  const Retry = () => {
    setTimer(0);
    setScore(0);
    setCurrentQuestion(0);
    setQuestionEnd(false);
  };
  return (
    <Wrapper>
      <Container className="wrapper">
        {questionEnd ? (
          <>
            <ScoreSection className="score-section">
              <p>
                You Scored {score} out of {questions.length}
              </p>
              <ButtonSection>
                <StyledButton variant="contained" onClick={Retry}>
                  Retry
                </StyledButton>
                <Link to="/test">
                  <EndTestBtn variant="contained">End Test</EndTestBtn>
                </Link>
              </ButtonSection>
            </ScoreSection>
          </>
        ) : (
          <>
            <TimerContainer>
              <TimerBtn variant="contained">Time Left: {timer}</TimerBtn>
            </TimerContainer>
            <QuestionContainer>
              <LeftSide className="question-section">
                <QuestionNumber>
                  Question {currentQuestion + 1} / 4{" "}
                </QuestionNumber>
                <QuestionText className="question-text">
                  {questions[currentQuestion].questionText}
                </QuestionText>
              </LeftSide>
              <RightSide className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (question, index) => {
                    return (
                      <>
                        <Options
                          onClick={() => goToNextQuestion(question.isCorrect)}
                          key={index}
                        >
                          {question.answerText}
                        </Options>
                      </>
                    );
                  }
                )}
              </RightSide>
              <EndTestBtn
                variant="contained"
                onClick={() => goToNextQuestion(false)}
              >
                Skip
              </EndTestBtn>
            </QuestionContainer>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: calc(100vh - 110px);
  padding: 50px 70px 30px 70px;
  display: grid;
  place-items: center;
`;
const Container = styled.div`
  width: 800px;
  min-height: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
`;

const QuestionContainer = styled.div`
  display: flex;
  height: 300px;
  padding: 20px 30px;
  border-radius: 10px;
`;
const LeftSide = styled.div`
  flex: 1;
  border-right: 1px solid green;
`;
const RightSide = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-left: 10px;
`;
const TimerBtn = styled(Button)`
  background: #0c4d4d !important;
`;

const EndTestBtn = styled(Button)`
  background: red !important;
  margin-left: 20px !important;
`;

const TimerContainer = styled.div`
  padding: 10px 25px;
  border-bottom: 1px solid green;
`;
const StyledButton = styled(Button)`
  display: block !important;
  font-size: 12px !important;
  background: #0c4d4d !important;
`;
const QuestionNumber = styled.h3``;
const QuestionText = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const Options = styled.div`
  padding: 10px 25px;
  margin: 10px;
  display: grid;
  place-items: center;
  transition: all 0.25s ease-in-out;
  border-radius: 3px;
  background-color: #f4f4f4;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ScoreSection = styled.div`
  border-radius: 10px;

  height: 300px;
  display: grid;
  place-items: center;
  p {
    text-align: center;
    font-size: 40px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
`;
