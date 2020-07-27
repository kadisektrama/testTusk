import {Redirect} from "react-router-dom"
import React from "react"
const initialState = {
  items:[
    {
      login:"vlad1",
      name:"vlad",
      surname:"zar",
      password:"1111"
  },
    {
      login:"lera1",
      name:"lera",
      surname:"piace",
      password:"2222"
  }
],
logged:false
}

export default(state = initialState,action) => {
  switch(action.type){
    case "REGISTRATION":{
      return {...state,logged:true,items:[...state.items,action.payload]};
      break;
    }
    case "LOGIN":{
      let name = initialState.items.find(item => item.login == action.payload.login &&
      item.password == action.payload.password)
      if(name){

        return{...state,logged:true}
        break;
        }else{
        return state
        }
        console.log(name)
      }
      default : return state;
    }
}
