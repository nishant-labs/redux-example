import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

class App extends React.Component {
  render() {
    return (
      <main role="main" className="container">
        <AppRoutes session={this.props.session} />
      </main>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  session: state.session,
});

export default withRouter(connect(mapStateToProps)(App));

