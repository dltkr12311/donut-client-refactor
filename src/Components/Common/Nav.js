import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from './Button';
import ResponsiveWrapper from './ResponsiveWrapper';

const StyledResponsive = styled(ResponsiveWrapper)`
  margin-top: 4rem;
  margin-bottom: 1rem;
`;

const SLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  .linkWrapper {
    display: flex;
    height: 2rem;
  }
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
      border-bottom: 3px solid #384259;
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
    <StyledResponsive>
      <Wrapper>
        <div className="linkWrapper">
          <Item current={pathname === '/'}>
            <SLink to="/">동네 활동</SLink>
          </Item>
          <Item current={pathname === '/mylist'}>
            <SLink to="/mylist">참여하고 있는 활동 보기</SLink>
          </Item>
        </div>
        <Link to="/write">
          <Button>활동 작성</Button>
        </Link>
      </Wrapper>
    </StyledResponsive>
  );
};

export default withRouter(Nav);
