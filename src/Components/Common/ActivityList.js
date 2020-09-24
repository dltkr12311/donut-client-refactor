import React from "react";
import styled from "styled-components";

const Block = styled.div`
  font-size: 1rem;
  width: calc(50% - 4.3rem);
  background: #dbe2ef;
  border: 2px solid black;
  margin: 0.5rem;
  padding: 1.5rem;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;
const Author = styled.div`
  margin-bottom: 0.4rem;
`;
const Description = styled.div`
  margin-bottom: 0.3rem;
`;
const Address = styled.div`
  margin-bottom: 0.3rem;
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
      <Title>타이틀</Title>
      <Author>작성자</Author>
      <Description>간략한내용</Description>
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
