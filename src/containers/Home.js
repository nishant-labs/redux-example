import React, {Component} from "react";
import {connect} from "react-redux";
import HomeUI from '../components/Home.ui';

class Home extends Component {
  render() {
    return (<HomeUI/>);
  }
}

export default connect()(Home);
