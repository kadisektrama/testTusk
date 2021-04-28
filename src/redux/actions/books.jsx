const initialState = {
  isReady:false,
  items:null,
  search:null,
  searching:""
}

export default  (state=initialState,action) => {
  switch(action.type){
    case "SET_BOOKS":
      return {...state,items:action.payload,isReady:true};
    case 'SET_IS_READY':{
      return{...state,isReady:action.payload}
    }
    case "SEARCH_BOOKS":{
        return {...state,search:action.payload,isReady:true};
    }
    case "ADD_SEARCHING":{
        break;
    }

    default: return state;

  }
};
