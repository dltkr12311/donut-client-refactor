import React from "react";
import styled from "styled-components";
import ResponsiveWrapper from "../Common/ResponsiveWrapper";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 70%;
  height: 80vh;
  margin: 0 auto;
  margin-top:5%;
  display:flex;
  flex-direction:column;
  align-items:center;

  a {
    display:block;
    color: #fff
  }
`;

const Button = styled.button`
  width: 55%;
  height:5vh;
  margin-bottom: 3%;
  margin-top:5%;
  justify-content:flex-start;
  background-color:#70adb5;
  border:none;
  color:#fff;
  cursor: pointer;
  outline:none;
  font-size:1rem;
  border-radius:5px;
  font-weight:bold;
  &:last-child{ 
    margin-top:0;
    margin-bottom: 7%;
  }
  &:active,
  &:focus{
    outline:none
  }
  &:hover {
    background-color:#709fb0;
  }
`;


const Img = styled.img`
   width: 80%;
  height: 50vh;
`;

const IntroForm = () => {
  return (
    <ResponsiveWrapper>
      <Wrapper>
        <Img src='https://i.imgur.com/UTaYQM1.png" title="Programming-amico.png' />
        <Button >
          <Link to='/signin'>로그인 또는 회원가입 하기</Link>
        </Button>
        <Button>
          <Link to='/locate'>동네 설정하고 둘러보기</Link>
        </Button>
      </Wrapper>
    </ResponsiveWrapper>
  )

}
export default IntroForm;