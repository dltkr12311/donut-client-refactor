import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  .btn {
    cursor: pointer;
    border-radius: 8px;
    font-size: 1.2rem;
    background: #8785a2;
    padding: 10px 15px;
    transition: all 100ms ease-in-out;
    box-shadow: 0px 2px 4px black;
  }
  .btn:first-child {
    margin-right: 1rem;
  }
  .btn:hover {
    color: white;
    background: #48466d;
  }
`;
const ActivityActionButton = () => {
  return (
    <Block>
      <div className="btn">수정</div>
      <div className="btn">삭제</div>
    </Block>
  );
};

export default ActivityActionButton;
