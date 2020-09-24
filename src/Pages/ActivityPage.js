import React from "react";
import Header from "../Components/Common/Header";
import Nav from "../Components/Common/Nav";
import ActivityContainer from "../Containers/Activity/ActivityContainer";

const ActivityPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <ActivityContainer />
    </>
  );
};

export default ActivityPage;
