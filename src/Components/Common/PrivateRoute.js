import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

const PrivateRoute = ({ history, path, component, ...rest }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  useEffect(() => {
    console.log();
    if (!user) {
      history.push('/intro');
    }
  }, [history, user]);

  return <Route path={path} component={component} {...rest}></Route>;
};

export default withRouter(PrivateRoute);
