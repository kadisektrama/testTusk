const initialState = {
  box:[],
  state:false
}

export default  (state = initialState,action) => {
  switch (action.type){
    case "ADD_BOOK":
      return {
        ...state,
        box:[...state.box,action.payload]
      }
    case "REMOVE_BOOK":
    return{
      ...state
    }
    case "CHANGE_STATE":
    return{
      ...state,

    }
    default: return state
  }
}
