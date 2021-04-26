const initialState = {
    items:[],
    logged:false
}

export default(state = initialState,action) => {
  switch(action.type){
    case "REGISTRATION":{
      return {
      ...state,
      logged:true,
      items:[...state.items,action.payload]
      };

    }

    case "UNLOGGED":{
      return {
      ...state,
      logged:false
      };
    }


    case "LOGGED":{
      return {
      ...state,
      logged:true
      };
    }

    case "SET_USERS":
          return {...state,items:action.payload};

      default : return state;
    }
}
