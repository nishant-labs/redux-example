import LoginConstants from '../constants/LoginConstants';

const initState = {
  username: '',
  password: ''
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LoginConstants.LOGIN_SEND_DATA:
      const form = {
        username: action.data.userName,
        password : action.data.pass
      };
      return Object.assign({}, ...state, form);
    case LoginConstants.LOGIN_RECEIVE_DATA_SUCCESS:
      return [...state, action.data];
    case LoginConstants.LOGIN_RECEIVE_DATA_FAILURE:
      return [ ...state, action.data ];
    default:
      return state;
  }
}