export const select = payload =>{
  console.log("ti urod!")
  return{
    type:"SET_BOOKS",
    payload:payload
  }
}
export const selectReady = payload =>{
  console.log("ti pidor!")
  return{
    type:"SET_IS_READY",
    payload:payload
  }
}
export const addBookToBox = payload => {
  console.log("book is added")
  return {
    type:"ADD_BOOK",
    payload:payload
  }
}
export const changestate = () => {
  console.log("state is changed")
    return{
      type:"CHANGE_STATE"
    }
}
export const registrationon = payload => {
  console.log("regbegin")
  return{
    type:"REGISTRATION",
    payload:payload
  }
}

export const login = payload => {
  console.log("logining")
  return{
    type:"LOGIN",
    payload:payload
  }
}
