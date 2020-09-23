import React from "react";
import styled from "styled-components";

const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: pink;
`;

const Header = () => {
  return <Block>감자</Block>;
};

export default Header;
