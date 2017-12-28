import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import appStore from './store/AppStore';

ReactDOM.render(
  <Provider store={appStore}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
