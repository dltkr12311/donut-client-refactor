import React from "react";
import styled from "styled-components";
import ResponsiveWrapper from "../Common/ResponsiveWrapper";

const Wrapper = styled.div`
  @media screen and (max-width: 950px) {
    max-width: 760px;
    background-color: blue;
    width:100vw;
    height:100vh
  }

`;


const AutoTemplateBlock = styled.div`
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  right:0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

/* 흰색박스 */
const WhiteBox = styled.div`
  padding: 2rem;
  width: 35%;
`;


const AuthTemplate = ({ children }) => {
    return (
        <ResponsiveWrapper>
            <Wrapper>
                <AutoTemplateBlock>
                    <WhiteBox>
                        {children}
                    </WhiteBox>
                </AutoTemplateBlock>
            </Wrapper>
        </ResponsiveWrapper>
    );
};

export default AuthTemplate;

