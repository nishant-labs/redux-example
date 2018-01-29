import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Login from '../containers/Login';
import Home from '../containers/Home';

const PrivateRoute = ({ component: Component, session, ...rest }) => {
  const isValidSession = (props) => {
    if (session.isAuthenticated) {
      return (<Component {...props} />);
    }
    return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
  };
  return (<Route {...rest} render={isValidSession} />);
};

const AppRoutes = ({ session }) => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} session={session} />
    <Route path="/login" component={Login}/>
    <PrivateRoute path="/home" component={Home} session={session} />
  </Switch>
);

export default AppRoutes;