import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media screen and (max-width: 950px) {
    max-width: 760px;
  }
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;

export default ({ children }) => <Wrapper>{children}</Wrapper>;
