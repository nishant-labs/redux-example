import React from "react";
import { connect } from 'react-redux';
import HeaderUI from '../../components/common/Header.ui';

class Header extends React.Component {
  render() {
    return (<HeaderUI />);
  }
}

const mapStateToProps = (state, ownProps) => ({
  /* active: ownProps.filter === state.visibilityFilter */
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  /* onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  } */
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

