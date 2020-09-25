import React from 'react';
import styled from 'styled-components';
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-size: 1.3rem;
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 0.5rem;
  outline: none;
  text-align: center;
  background-color: #f9f7f7;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 30%;
  min-width: 500px;
  background: #f9f7f7;
  border-radius: 10px;
`;
const LocateForm = () => {
  return (
    <Block>
      <Box>
        <StyledInput
          name="locate"
          placeholder="동명(읍, 면)으로 검색 (ex. 서초동)"
        ></StyledInput>
        <Button fullWidth>현재 위치로 찾기</Button>
      </Box>
    </Block>
  );
};

export default LocateForm;
