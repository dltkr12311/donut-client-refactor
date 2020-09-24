
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import IntroPage from "../../Pages/IntroPage";
import ActivityPage from "../../Pages/ActivityPage";
import MyListPage from "../../Pages/MyListPage";
import LocatePage from "../../Pages/LocatePage";
import LoginPage from "../../Pages/LoginPage";
import RegisterPage from "../../Pages/RegisterPage";


export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={ActivityPage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/signin" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/mylist" component={MyListPage} />
        <Route path="/locate" component={LocatePage} />
        <Route path="/mypage" component={MyPagePage} />
        <Route path="/mypage/activity" />
        <Route path="/write" />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
