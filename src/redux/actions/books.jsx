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
      return{...state,
      isReady:action.payload}
      break;
    }
    case "ADD_SEARCHING":{

    }

    default: return state;

  }
};
