import * as Actions from '../Action/Index';

export function loginAttempt() {
  return {
    type: "LOADER",
    payload: {
      loadingaction: true,
    }
  }
}

export default Actions;
