import React from 'react';
import styled from 'styled-components';

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
      <div>나의 활동</div>
    </Content>
  );
};

export default MyActivity;
