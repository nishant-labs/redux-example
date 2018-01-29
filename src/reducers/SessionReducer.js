import AppConstants from "../constants/AppConstants";

const session = {
  isAuthenticated : false
};

export const sessionReducer = (state = session, action) => {
  switch (action.type) {
    case AppConstants.SESSION_SET:
      return Object.assign({}, ...state, {
        isAuthenticated : true
      });
    case AppConstants.SESSION_INVAID:
      return Object.assign({}, ...state, {
        isAuthenticated : false
      });
    default:
      return state;
  }
}
