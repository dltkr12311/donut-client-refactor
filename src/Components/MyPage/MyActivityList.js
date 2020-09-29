import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';
import Modal from '../Modal/Modal';

const Block = styled.div`
  display: flex;
  padding: 1.5rem 2rem;
  background: white;
  height: 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 2px 4px black;
  margin-bottom: ${(props) => (props.last ? 0 : '2rem')};
  div {
    font-size: 1.3rem;
  }
  div:not(:last-child) {
    margin-right: 1rem;
  }
  .wrapper {
    display: flex;
  }
`;

const MyActivityList = ({ last }) => {
  return (
    <Block last={last}>
      <div className="wrapper">
        <div>타이틀</div>
        <div>간략한 내용</div>
        <div>동네 주소</div>
        <div>기술들</div>
      </div>
      <Button>지원자 현황</Button>
      <Modal />
    </Block>
  );
};

export default MyActivityList;
