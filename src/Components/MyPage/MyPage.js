import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ResponsiveWrapper from '../Common/ResponsiveWrapper';
import MyActivity from './MyActivity';
import MyProfile from './MyProfile';

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

const SLink = styled(Link)`
  color: #838383;
  transition: color 100ms ease-in-out;
  ${(props) =>
    props.current &&
    css`
      border-bottom: 3px solid #384259;
      color: black;
    `}
  &:hover {
    color: black;
  }
`;

const MyPage = ({ location: { pathname } }) => {
  return (
    <Block>
      <VerticalNav>
        <div>
          <SLink current={pathname === '/mypage'} to="/mypage">
            프로필 설정
          </SLink>
        </div>
        <div>
          <SLink current={pathname === '/mypage/activity'} to="/mypage/activity">
            내 활동
          </SLink>
        </div>
      </VerticalNav>
      {pathname === '/mypage' ? <MyProfile /> : <MyActivity />}
    </Block>
  );
};

export default withRouter(MyPage);
