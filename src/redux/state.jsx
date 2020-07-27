import React from "react"

const Store ={
  books:{
    isReady:false,
    items:null,
    search:null,
    searching:""
  },
  trashBox:{
    box:[],
    state:false
  },

  getState(){
    return this.state
  },
  Show(){},
  Subscribe(observer){
    this.Show = observer;
  }

}
window.store = Store
export default Store
