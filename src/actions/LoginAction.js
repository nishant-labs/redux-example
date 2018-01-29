import LoginConstants from '../constants/LoginConstants';

export default class LoginActions {
  static sendLoginData(cred) {
    return { type: LoginConstants.LOGIN_SEND_DATA, data: cred };
  }

  static responseLoginSuccess(cred) {
    return { type: LoginConstants.LOGIN_RECEIVE_DATA_SUCCESS, data: cred };
  }

  static responseLoginFailure(cred) {
    return { type: LoginConstants.LOGIN_RECEIVE_DATA_FAILURE, data: cred };
  }

}