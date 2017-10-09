export default function Reducers(state={
  user:{},
  login:false,
  loader:false,
  Recordinglist:false,
}, action){
  switch (action.type){

    case "LOADER":
    {
      return {...state, loader: action.payload}
    }

    default: return state;
  }
  return state;
}