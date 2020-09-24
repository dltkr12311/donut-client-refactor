import React from 'react';
import styled from 'styled-components';
import ResponsiveWrapper from '../Common/ResponsiveWrapper';
import ActivityList from '../Common/ActivityList';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Activity = () => {
  return (
    <ResponsiveWrapper>
      <Wrapper>
        <ActivityList />
        <ActivityList />
        <ActivityList />
        <ActivityList />
        <ActivityList />
        <ActivityList />
        <ActivityList />
      </Wrapper>
    </ResponsiveWrapper>
  );
};

export default Activity;
