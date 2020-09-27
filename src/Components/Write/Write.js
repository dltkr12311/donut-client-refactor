import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../Common/Button';
import ResponsiveWrapper from '../Common/ResponsiveWrapper';

const Form = styled.form``;

const Content = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.4);
  min-height: 85vh;
  padding: 20px;
  border-radius: 8px;
  background: ${palette.activity};
  .header {
    margin-bottom: 0.5rem;
  }
  .item {
    background: ${palette.activityItem};
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  .item-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .author {
    font-size: 1.4rem;
  }
  .input-title {
    font-size: 2.5rem;
  }
`;

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5% 0;
  background: ${palette.activityItem};
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 0.5rem;
  outline: none;
  padding-left: 0.5rem;
  &:focus {
    color: #333;
    border-bottom: 3px solid #6c5b7b;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .wrapper {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
`;
const StyledButton = styled(Button)`
  font-size: 1.5rem;
`;
const Write = () => {
  return (
    <ResponsiveWrapper>
      <Form>
        <Content>
          <div className="header">
            <StyledInput
              className="input-title"
              placeholder="활동 제목을 입력해주세요."
            />
          </div>
          <div className="item">
            <div className="item-title">주요 활동</div>
            <StyledInput placeholder="주요 활동을 작성해주세요." />
          </div>
          <div className="item">
            <div className="item-title">활동 소개</div>
            <StyledInput placeholder="활동을 소개하는 내용을 작성해주세요." />
          </div>
          <div className="item">
            <div className="item-title">기술 스택</div>
            <StyledInput placeholder="[임시]콤보박스에서 선택 후 아래에 아이템 추가" />
          </div>
          <div className="item">
            <div className="item-title">참여 조건</div>
            <StyledInput placeholder="[임시]콤보박스에서 선택 후 아래에 아이템 추가" />
          </div>
          <div className="item location">
            <div className="item-title">위치</div>
            <StyledInput placeholder="[임시]작성자 위치" />
          </div>
        </Content>
        <ButtonBlock>
          <div className="wrapper">
            <StyledButton>취소하기</StyledButton>
            <StyledButton>작성하기</StyledButton>
          </div>
        </ButtonBlock>
      </Form>
    </ResponsiveWrapper>
  );
};

export default Write;
