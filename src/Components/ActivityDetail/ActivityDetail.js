import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import ResponsiveWrapper from '../Common/ResponsiveWrapper';
import Profile from './Profile';
import TechBox from './TechBox';

const Block = styled.div`
  display: flex;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  min-height: 85vh;
  padding: 20px;
  border-radius: 8px;
  background: ${palette.activity};
  width: calc(100% - 340px);
  border: 2px solid rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 950px) {
    width: calc(100% - 40px);
  }
  .header {
    margin-bottom: 0.5rem;
  }
  .item {
    background: ${palette.activityItem};
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 2px 4px black;
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
    display: flex;
    align-items: center;
  }
  .author {
    font-size: 1.4rem;
  }
`;

const Map = styled.div`
  margin-top: 1rem;
  width: 300px;
  height: 300px;
  background: green;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  .btn {
    cursor: pointer;
    border-radius: 8px;
    font-size: 1.2rem;
    background: #8785a2;
    padding: 10px 15px;
    transition: all 100ms ease-in-out;
    box-shadow: 0px 2px 4px black;
  }
  .btn:hover {
    color: white;
    background: #48466d;
  }
`;

const ActivityDetail = () => {
  return (
    <ResponsiveWrapper>
      <Block>
        <Content>
          <div className="header">
            <div className="title">
              <img
                src="https://i.ibb.co/TR5KgmM/donut-logo.png"
                width="50px"
                alt="donut-logo"
              />
              타이틀(땡땡 활동 모집합니다.)
            </div>
            <div className="author">DB:username</div>
          </div>
          <ButtonBlock>
            <div className="btn">참여하기</div>
          </ButtonBlock>
          <div className="item">
            <div className="item-title">주요 활동</div>
            <div>(선택된)주요활동</div>
          </div>
          <div className="item">
            <div className="item-title">활동 소개</div>
            <div>소개내용소개내용소개내용소개내용소개내용소개내용</div>
          </div>
          <div className="item">
            <div className="item-title">기술 스택</div>
            <div>
              <TechBox color="#f38181">JavaScript</TechBox>
              <TechBox color="#f38181">Git</TechBox>
              <TechBox color="#f38181">JavaScript</TechBox>
              <TechBox color="#f38181">Git</TechBox>
              <TechBox color="#f38181">JavaScript</TechBox>
              <TechBox color="#f38181">Git</TechBox>
              <TechBox color="#f38181">JavaScript</TechBox>
              <TechBox color="#f38181">Git</TechBox>
              <TechBox color="#f38181">JavaScript</TechBox>
              <TechBox color="#f38181">Git</TechBox>
              <TechBox color="#f38181">JavaScript</TechBox>
            </div>
          </div>
          <div className="item">
            <div className="item-title">참여 조건</div>
            <div>참여조건조건조건조건</div>
          </div>
          <div className="item location">
            <div className="item-title">위치</div>
            <div>서울시 용산구 한남동</div>
            <Map>지도</Map>
          </div>
        </Content>
        <Profile />
      </Block>
    </ResponsiveWrapper>
  );
};

export default ActivityDetail;
