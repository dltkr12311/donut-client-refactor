import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Block = styled.div`
  font-size: 1rem;
  width: calc(50% - 4.3rem);
  border-radius: 8px;
  background: ${palette.activity};
  border: 2px solid rgba(0, 0, 0, 0.4);
  margin: 0.5rem;
  padding: 1.5rem;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;
const Author = styled.div`
  margin-bottom: 0.5rem;
`;
const Description = styled.div`
  margin-bottom: 0.5rem;
`;
const Address = styled.div`
  margin-bottom: 0.5rem;
`;
const TagList = styled.div`
  display: flex;
  div {
    padding-right: 1rem;
  }
`;

const ActivityItem = ({ id, name, intro, participationCriteria, user_info }) => {
  return user_info ? (
    <Block>
      <Link to={`/@${user_info.username}/${id}`}>
        <Title>{name}</Title>
      </Link>
      <Author>{user_info.username}</Author>
      <Description>{intro}</Description>
      <Address>{user_info.latlon}</Address>
      <TagList>
        <div>{participationCriteria}</div>
        <div>기술1</div>
        <div>기술2</div>
        <div>기술3</div>
      </TagList>
    </Block>
  ) : (
    <Block>
      <Link to={`/@test/test`}>
        <Title>타이틀</Title>
      </Link>
      <Author>작성자</Author>
      <Description>활동 소개 간략</Description>
      <Address>위치 정보</Address>
      <TagList>
        <div>활동</div>
        <div>기술1</div>
        <div>기술2</div>
        <div>기술3</div>
      </TagList>
    </Block>
  );
};

export default ActivityItem;
