import React from "react";
import styled, { css } from "styled-components";

const StyleButtom = styled.button`
  border: none;
  width:100%;
  height:4.7vh;
  border-radius: 4px;
  font-size:1rem;
  font-weight:bold;
  padding: 0.25rem 1rem;
  color:white;
  outline:none;
  cursor: pointer;
  background:#70adb5;
  &:hover {
      background:purple;
  }
  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width:100%;
      font-size: 1.125rem;
    `}
    ${props =>
    props.cyan &&
    css`
        background: #70adb5;
        &:hover {
            background: #709fb0;
        }
      `
  }
`;

const Button = props => <StyleButtom {...props} />;

export default Button;



