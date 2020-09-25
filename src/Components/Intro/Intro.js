import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../Common/Button';

const Block = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.header};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: ivory;
  margin-bottom: 1.5rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 35%;
  min-width: 500px;
  background: #f9f7f7;
  border-radius: 10px;
`;

const IntroForm = () => {
  return (
    <Block>
      <Box>
        <Intro>대충 소개 할곳</Intro>
        <Link to="/signin">
          <Button fullWidth style={{ marginBottom: '1rem' }}>
            로그인 또는 회원가입 하기
          </Button>
        </Link>
        <Link to="/locate">
          <Button fullWidth>동네 설정하고 둘러보기</Button>
        </Link>
      </Box>
    </Block>
  );
};
export default IntroForm;
