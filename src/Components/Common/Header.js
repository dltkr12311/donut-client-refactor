import React, { useState } from 'react';
import styled from 'styled-components';
import ResponsiveWrapper from './ResponsiveWrapper';
import { FaUserAlt } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background: #ad9d9d;
  box-shadow: 0px 2px 4px black;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  img {
    margin-right: 0.4rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #821752;
    min-width: 100px;
    line-height: 100%;
    display: flex;
    align-items: center;
    &:hover {
      font-size: 0;
    }
    &:hover:before {
      content: '도 넛';
      font-size: 1.5rem;
    }
  }
`;

const ItemBlock = styled.div`
  display: flex;
  .dropdown {
    cursor: pointer;
    position: relative;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    background: #679b9b;
    border-radius: 100%;
  }
`;
const DropDown = styled.ul`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 3rem;
  right: 0;
  width: 8rem;
  background: #d4a5a5;
  font-weight: bold;
  box-shadow: 0px 2px 4px black;
  li {
    padding-left: 0.5rem;
  }
  li:hover {
    background: #b2a5a5;
  }
`;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Block>
      <ResponsiveWrapper>
        <Wrapper>
          <ItemBlock>
            <Link to="/" style={{ display: 'flex' }}>
              <img
                src="https://i.ibb.co/TR5KgmM/donut-logo.png"
                width="50px"
                alt="donut-logo"
              />
              <h1>DONUT</h1>
            </Link>
          </ItemBlock>
          <ItemBlock>
            <Item className="dropdown" onClick={() => setIsOpen(!isOpen)}>
              <span>
                <FaUserAlt size={25} />
              </span>
              <MdArrowDropDown size={25} />
              <DropDown isOpen={isOpen}>
                <Link to="/mypage">
                  <li>프로필 설정</li>
                </Link>
                <li>로그아웃</li>
              </DropDown>
            </Item>
          </ItemBlock>
        </Wrapper>
      </ResponsiveWrapper>
    </Block>
  );
};

export default Header;
