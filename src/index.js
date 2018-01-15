import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import appStore from './store/AppStore';
import Header from './containers/common/Header';
import Footer from './containers/common/Footer';

const init = () => (
  <Provider store={appStore}>
    <BrowserRouter >
      <div>
        <Header />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(init(), document.getElementById('root'));