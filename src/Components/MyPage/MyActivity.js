import React from 'react';
import styled from 'styled-components';
import MyActivityList from '../Common/MyActivityList';

const Content = styled.div`
  padding: 3rem 4rem;
  background: #f4f2ed;
  border-radius: 9px;
  flex-grow: 2;

  h2 {
    font-size: 1.3rem;
    margin-right: 2rem;
  }
  span {
    margin-right: 2rem;
  }
`;

const MyActivity = () => {
  return (
    <Content>
      <MyActivityList />
      <MyActivityList />
      <MyActivityList />
      <MyActivityList last />
    </Content>
  );
};

export default MyActivity;
