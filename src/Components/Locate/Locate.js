import React from 'react';
import styled from 'styled-components';
import ResponsiveWrapper from "../Common/ResponsiveWrapper";

const Wrapper = styled.div`
  padding:5%;
  height:50vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position: relative;
`;
const StyledInput = styled.input`
  font-size: 1.3rem;
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 0.5rem;
  outline:none;
  text-align:center;
  width:40%;
  background-color:#f9f7f7;
  letter-spacing: 1px;

`;
const Button = styled.button`
  width: 30%;
  height:6vh;
  margin-top:3%;
  background-color:#70adb5;
  border:none;
  color:#fff;
  cursor: pointer;
  outline:none;
  font-size:1.2rem;
  font-weight: 600;
  border-radius: 5px;
`;

const LocateForm = () => {
  return (
    <ResponsiveWrapper>
      <Wrapper>
        <StyledInput name='locate' placeholder='동명(읍, 면)으로 검색 (ex. 서초동)'>
        </StyledInput>
        <Button>현재 위치로 찾기</Button>
      </Wrapper>
    </ResponsiveWrapper>
  )
}

export default LocateForm;
