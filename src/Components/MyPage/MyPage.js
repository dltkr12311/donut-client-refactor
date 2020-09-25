import React from 'react';
import styled from 'styled-components';
import ResponsiveWrapper from '../Common/ResponsiveWrapper';

const Block = styled(ResponsiveWrapper)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding-top: 5rem;
`;
const VerticalNav = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-right: 2rem;
  div {
    margin-bottom: 2rem;
  }
`;

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

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 4px black;
  margin-bottom: ${(props) => (props.last ? 0 : '2rem')};
  h2 {
    font-weight: bold;
  }
  .dbvalue {
    display: flex;
    align-items: center;
  }
`;

const MyPage = () => {
  return (
    <Block>
      <VerticalNav>
        <div>프로필 설정</div>
        <div>내 활동</div>
      </VerticalNav>
      <Content>
        <Item>
          <div className="dbvalue">
            <h2>유저명</h2>
            <p>DB: 유저명</p>
          </div>
          <span>변경</span>
        </Item>
        <Item>
          <div className="dbvalue">
            <h2>E-mail</h2>
            <span>DB:email</span>
          </div>
        </Item>
        <Item>
          <h2>패스워드</h2>
          <span>변경</span>
        </Item>
        <Item last={1}>
          <h2>회원탈퇴</h2>
          <span>탈퇴</span>
        </Item>
      </Content>
    </Block>
  );
};

export default MyPage;
