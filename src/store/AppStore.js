import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AppReducer from '../reducers/AppReducer';

const loggerMiddleware = createLogger();
const initstate = {};

const appStore = createStore(AppReducer, initstate,  applyMiddleware(thunkMiddleware, loggerMiddleware));

export default appStore;