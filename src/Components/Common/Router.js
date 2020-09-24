import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import IntroPage from "../../Pages/IntroPage";
import ActivityPage from "../../Pages/ActivityPage";
import MyListPage from "../../Pages/MyListPage";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={ActivityPage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/signin" />
        <Route path="/signup" />
        <Route path="/mylist" component={MyListPage} />
        <Route path="/mypage" />
        <Route path="/locate" />
        <Route path="/write" />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
