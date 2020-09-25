import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ResponsiveWrapper from './ResponsiveWrapper';
const SLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  margin-left: 3rem;
`;

const Item = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #838383;
  transition: color 100ms ease-in-out;
  ${(props) =>
    props.current &&
    css`
      border-bottom: 3px solid #3f72af;
      color: black;
    `}
  &:hover {
    color: black;
  }
  &:first-child {
    margin-right: 2rem;
  }
`;

const Nav = ({ location: { pathname } }) => {
  return (
    <ResponsiveWrapper>
      <Wrapper>
        <Item current={pathname === '/'}>
          <SLink to="/">동네 활동</SLink>
        </Item>
        <Item current={pathname === '/mylist'}>
          <SLink to="/mylist">참여하고 있는 활동 보기</SLink>
        </Item>
      </Wrapper>
    </ResponsiveWrapper>
  );
};

export default withRouter(Nav);
