import React from "react";
import Header from "../Components/Common/Header";
import Nav from "../Components/Common/Nav";
import ActivityDetailContainer from "../Containers/ActivityDetail/ActivityDetailContainer";

const ActivityDetailPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <ActivityDetailContainer />
    </>
  );
};

export default ActivityDetailPage;
