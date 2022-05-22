import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <Text>StudySpace | Copyright © 2022</Text>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  background-color: rgba(156, 163, 175, 0.2);
  padding: 12px 20px;
  @media screen and (max-width: 450px) {
  padding: 10px 10px;
  }
`;
const Text = styled.p`
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
