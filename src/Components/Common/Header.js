import React from "react";
import styled from "styled-components";
import ResponsiveWrapper from "./ResponsiveWrapper";

const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background: #dbe2ef;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Block>
      <ResponsiveWrapper>
        <Wrapper>
          <h1>DONUT</h1>
          <div>USER</div>
        </Wrapper>
      </ResponsiveWrapper>
    </Block>
  );
};

export default Header;
