import React from 'react';
// import logo from '../static/images/logo.svg';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginUI from '../components/Login.ui';
import LoginActions from '../actions/LoginAction';
import SessionActions from '../actions/SessionActions';
import HtmlUtils from "../utils/HtmlUtils";

class Login extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return (<Redirect to={from} />);
    } else {
      return (<LoginUI username={this.props.username} password={this.props.password} onSubmit={this.props.onSubmit}/>);
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  username: state.login.username,
  password: state.login.password,
  isLoggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (e) => {
    const formData = HtmlUtils.getFormData(e);
    e.target.reset();
    dispatch(LoginActions.sendLoginData(formData));
    dispatch(SessionActions.saveSessionData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
