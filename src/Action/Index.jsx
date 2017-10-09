import * as Actions from '../Action/Index';

export function loginAttempt() {
  console.log('it comes here')
  return {
    type: "LOADER",
    payload: {
      loadingAction: true,
    }
  }
}

export default Actions;
