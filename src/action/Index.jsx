import * as Actions from './/Index';

export function loginAttempt() {
  return {
    type: "LOADER",
    payload: {
      loadingAction: true,
    }
  }
}

export default Actions;
