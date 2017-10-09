import * as Actions from '../Action/Index';

export function loginAttempt() {
  return {
    type: "LOADER",
    payload: {
      loadingAction: true,
    }
  }
}

export default Actions;
