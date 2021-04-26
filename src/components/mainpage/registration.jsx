import React from "react"
import s from "./registration.module.scss"
import axios from "axios"
import {NavLink} from 'react-router-dom'


export class Registration extends React.Component {
  constructor(props){
  super(props);
  this.state={

  x:false,
  auth:false
  }
  this.onClick = this.onClick.bind(this)
}

  onClick(){
    console.log(this.state.ref3,this.state.ref4)
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    if(document.getElementById("password").value === document.getElementById("repeat_password").value){
      alert("correct")
      let item = {
        "login":document.getElementById("login").value,
        "name":document.getElementById("name").value,
        "surname":document.getElementById("surname").value,
        "password":document.getElementById("password").value,
        "id":getRandomInt(10000)
      }
      axios.post('http://localhost:3000/users',item)
      this.props.registrationon({item});
      this.setState({auth:true})
      localStorage.logged = true

    }else{
      alert("incorrect")
      return 1
    }

  }

render(){

  return(
    <div className={s.main}>
      Login:<input className={1} id="login"></input><br/>
      Name:<input  className={2} id="name"></input><br/>
      Surn:<input className={3} id="surname"></input><br/>
      Passw:<input className={4} id="password"></input><br/>
      Repeat passw:<input className={5} id="repeat_password"></input><br />
      {this.state.x ? <NavLink className={s.navlink} to="/registration">
      <button onClick = {this.onClick}>Reg</button></NavLink> :
      <NavLink className={s.navlink} to="/">
      <button onClick = {this.onClick}>Reg</button></NavLink>}

    </div>
    )
  }
}
