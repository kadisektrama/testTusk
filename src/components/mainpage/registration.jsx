import React from "react"
import s from "./registration.module.css"
import {NavLink,Redirect,useHistory} from 'react-router-dom'


export class Registration extends React.Component {
  constructor(props){
  super(props);
  this.state={
  ref0 :React.createRef(),
  ref1: React.createRef(),
  ref2: React.createRef(),
  ref3: React.createRef(),
  ref4: React.createRef(),
  x:false,
  authFails:true
  }
  this.onClick = this.onClick.bind(this)
}


  onClick(){
    console.log(this.state.ref1.current.value,this.state.ref2.current.value)
    if(true){
      return <Redirect to='/help' />
    }
    if(this.state.ref3.current.value == this.state.ref4.current.value){
      alert("correct")
      console.log(this.state.ref3.current.value,this.state.ref4.current.value)
      let item = {
        "login":this.state.ref0.current.value,
        "name":this.state.ref1.current.value,
        "surname":this.state.ref2.current.value,
        "password":this.state.ref3.current.value
      }
      this.props.registrationon({item});

    }else{
      alert("uncorrect")
      return 1
    }

  }

render(){

  return(
    <div className={s.main}>
      Login:<input ref={this.state.ref0}></input><br/>
      Name:<input ref={this.state.ref1}></input><br/>
      Surn:<input ref={this.state.ref2}></input><br/>
      Passw:<input ref={this.state.ref3}></input><br/>
      Repeat passw:<input ref={this.state.ref4}></input><br />
      {this.state.x ? <NavLink className={s.navlink} to="/registration">
      <button onClick = {this.onClick}>Reg</button></NavLink> :
      <NavLink className={s.navlink} to="/main_menu">
      <button onClick = {this.onClick}>Reg</button></NavLink>}

    </div>
    )
  }
}
