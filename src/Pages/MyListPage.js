import React from "react";
import Header from "../Components/Common/Header";
import Nav from "../Components/Common/Nav";
import MyListContainer from "../Containers/MyList/MyListContainer";

const MyListPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <MyListContainer />
    </>
  );
};

export default MyListPage;
