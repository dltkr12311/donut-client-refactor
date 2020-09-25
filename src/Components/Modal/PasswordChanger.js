import React from 'react';
import Button from '../Common/Button';
import styled from 'styled-components';

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
  & + & {
    margin-top: 1.3rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  background: #e6a4b4;
  &:hover {
    background: #c86b85;
  }
`;

const PasswordChanger = () => {
  return (
    <Form>
      <StyledInput placeholder="기존 패스워드" />
      <StyledInput placeholder="변경할 패스워드" />
      <StyledInput placeholder="변경할 패스워드 확인" />
      <StyledButton>변경</StyledButton>
    </Form>
  );
};

export default PasswordChanger;
