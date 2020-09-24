import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ResponsiveWrapper from "./ResponsiveWrapper";
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
  border-bottom: 3px solid #3f72af;
  &:first-child {
    margin-right: 2rem;
  }
`;

const Nav = () => {
  return (
    <ResponsiveWrapper>
      <Wrapper>
        <Item>
          <SLink to="/">동네 활동</SLink>
        </Item>
        <Item>
          <SLink to="/mylist">참여하고 있는 활동 보기</SLink>
        </Item>
      </Wrapper>
    </ResponsiveWrapper>
  );
};

export default Nav;
