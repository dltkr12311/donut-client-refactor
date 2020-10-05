import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';

const Block = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .wrapper {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
`;
const StyledButton = styled(Button)`
  font-size: 1.5rem;
`;

const WriteActionButton = ({ onCancel, onPublish }) => {
  return (
    <Block>
      <div className="wrapper">
        <StyledButton onClick={onCancel}>취소하기</StyledButton>
        <StyledButton onClick={onPublish}>작성하기</StyledButton>
      </div>
    </Block>
  );
};

export default WriteActionButton;
