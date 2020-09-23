import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import IntroPage from "../../Pages/IntroPage";
import MainPage from "../../Pages/MainPage";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/signin" />
        <Route path="/signup" />
        <Route path="/mypage" />
        <Route path="/locate" />
        <Route path="/write" />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
