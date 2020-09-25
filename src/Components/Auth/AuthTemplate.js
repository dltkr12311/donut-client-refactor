import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';
const AutoTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.header};
`;

/* 흰색박스 */
const WhiteBox = styled.div`
  padding: 2rem;
  width: 35%;
  min-width: 500px;
  background: #f9f7f7;
  border-radius: 10px;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SLink = styled(Link)`
  & > * {
    transition: transform 200ms ease-in-out;
  }
  & > *:hover {
    transform: scale(1.3);
  }
`;
const AuthTemplate = ({ children }) => {
  return (
    <AutoTemplateBlock>
      <WhiteBox>
        <FlexBox>
          <img
            src="https://i.ibb.co/TR5KgmM/donut-logo.png"
            width="100px"
            alt="donut-logo"
          />
          <SLink to="/intro">
            <TiArrowBack size={80} color={'#838383'} />
          </SLink>
        </FlexBox>
        {children}
      </WhiteBox>
    </AutoTemplateBlock>
  );
};

export default AuthTemplate;
