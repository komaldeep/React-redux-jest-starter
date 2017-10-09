export default function Reducers(state={
  loader:false,
}, action){
  switch (action.type){

    case "LOADER":
    {
      return {...state, loader: action.payload}
    }

    default:
      return state;
  }
}