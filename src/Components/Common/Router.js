import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import IntroPage from '../../Pages/IntroPage';
import ActivityPage from '../../Pages/ActivityPage';
import MyListPage from '../../Pages/MyListPage';
import MyPagePage from '../../Pages/MyPagePage';

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={ActivityPage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/signin" />
        <Route path="/signup" />
        <Route path="/mylist" component={MyListPage} />
        <Route path="/mypage" component={MyPagePage} />
        <Route path="/mypage/activity" />
        <Route path="/locate" />
        <Route path="/write" />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
