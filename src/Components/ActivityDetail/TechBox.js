import React from 'react';
import styled from 'styled-components';

const Block = styled.span`
  display: inline-block;
  background: ${(props) => props.color};
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 0.3rem;
  margin-bottom: 0.5rem;
  box-shadow: 0px 2px 4px black;
`;

const TechBox = ({ children, color }) => {
  return <Block color={color}>{children}</Block>;
};

export default TechBox;
