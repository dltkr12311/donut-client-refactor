import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  margin-right: 1rem;
  border: none;
  border-bottom: 2px solid #000;
  padding-bottom: 0.3rem;
  outline: none;
  &:focus {
    color: #333;
    border-bottom: 2px solid blue;
  }
`;
const StyledButton = styled(Button)`
  margin-top: 1rem;
  background: #e6a4b4;
  &:hover {
    background: #c86b85;
  }
`;
const UsernameChanger = () => {
  return (
    <Form>
      <StyledInput placeholder="변경하실 유저명을 입력하세요" />
      <StyledButton>변경</StyledButton>
    </Form>
  );
};

export default UsernameChanger;
