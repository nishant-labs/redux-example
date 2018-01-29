import React, { Component } from 'react';

class LoginUI extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
  }
  render() {
    return (
      <form action='' onSubmit={this.onSubmit} >
        <div>
          <label htmlFor="userName">User Name
            <input type="text" id="userName" defaultValue={this.props.username}/>
          </label>
        </div>
        <div>
          <label htmlFor="pass">Password
            <input type="password" id="pass" defaultValue={this.props.password}/>
          </label>
        </div>
        <div>
            <input type="submit" value="Login" />
        </div>
      </form>
    );
  }
}

export default LoginUI;
