import React from 'react';
import {connect} from 'react-redux';
import FooterUI from '../../components/common/Footer.ui';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer text-center">
        <FooterUI></FooterUI>
      </footer>
    );
  }
}

export default connect()(Footer);
