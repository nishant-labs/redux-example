import AppConstants from '../constants/AppConstants';

export default class SessionActions {
  static saveSessionData() {
    return { type: AppConstants.SESSION_SET };
  }

  static resetSessionData() {
    return { type: AppConstants.SESSION_INVAID };
  }

}