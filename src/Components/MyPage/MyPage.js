import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
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

const MyPage = ({ location: { pathname } }) => {
  return (
    <Block>
      <VerticalNav>
        <div>
          <Link to="/mypage">프로필 설정</Link>
        </div>
        <div>
          <Link to="/mypage/activity">내 활동</Link>
        </div>
      </VerticalNav>
      {pathname === '/mypage' ? <MyProfile /> : <MyActivity />}
    </Block>
  );
};

export default withRouter(MyPage);
