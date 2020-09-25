import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';

const Content = styled.div`
  padding: 3rem 4rem;
  background: #f4f2ed;
  border-radius: 9px;
  flex-grow: 2;

  h2 {
    font-size: 1.3rem;
    margin-right: 2rem;
  }
  span {
    margin-right: 2rem;
  }
`;

const StyledButton = styled(Button)`
  width: 10%;
  min-width: 80px;
  background: #838383;
  box-shadow: 0px 2px 4px black;

  &:hover {
    background: #cbaf87;
  }
`;

const Item = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 4px black;
  margin-bottom: ${(props) => (props.last ? 0 : '2rem')};
  .dbvalue {
    display: flex;
    align-items: center;
  }
  h2 {
    font-weight: bold;
  }
  p {
  }
`;

const MyProfile = () => {
  return (
    <Content>
      <Item>
        <div className="dbvalue">
          <h2>유저명</h2>
          <p>DB: 유저명</p>
        </div>
        <StyledButton>변경</StyledButton>
      </Item>
      <Item>
        <div className="dbvalue">
          <h2>E-mail</h2>
          <p>DB:email</p>
        </div>
      </Item>
      <Item>
        <h2>패스워드</h2>
        <StyledButton>변경</StyledButton>
      </Item>
      <Item last={1}>
        <h2>회원탈퇴</h2>
        <StyledButton>탈퇴</StyledButton>
      </Item>
    </Content>
  );
};

export default MyProfile;
