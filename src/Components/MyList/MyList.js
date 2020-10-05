import React from 'react';
import styled from 'styled-components';
import ActivityItem from '../Activity/ActivityItem';
import ResponsiveWrapper from '../Common/ResponsiveWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MyList = () => {
  return (
    <ResponsiveWrapper>
      <Wrapper>
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </Wrapper>
    </ResponsiveWrapper>
  );
};

export default MyList;
