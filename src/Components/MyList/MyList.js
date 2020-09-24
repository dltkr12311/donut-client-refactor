import React from "react";
import styled from "styled-components";
import ActivityList from "../Common/ActivityList";
import ResponsiveWrapper from "../Common/ResponsiveWrapper";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MyList = () => {
  return (
    <ResponsiveWrapper>
      <Wrapper>
        <ActivityList />
        <ActivityList />
        <ActivityList />
      </Wrapper>
    </ResponsiveWrapper>
  );
};

export default MyList;
