import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Block = styled.div`
  font-size: 1rem;
  width: calc(50% - 4.3rem);
  border-radius: 8px;
  background: #ffc7c7;
  border: 2px solid black;
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

const ActivityList = () => {
  return (
    <Block>
      <Link to={`/@작성자/sample`}>
        <Title>타이틀</Title>
      </Link>
      <Author>작성자</Author>
      <Description>
        이러한이러한활동을 하기위해서 이러한이러한 모집을 진행중입니다. 이러한 것에
        관심있으시면 지원해주세요.
      </Description>
      <Address>동네주소</Address>
      <TagList>
        <div>활동</div>
        <div>기술1</div>
        <div>기술2</div>
        <div>기술3</div>
      </TagList>
    </Block>
  );
};

export default ActivityList;
