import React from "react"
import s from "./unlogged.module.css"
import Form from "./forms/forms"
import {NavLink,Redirect,useHistory} from 'react-router-dom'
import { browserHistory } from 'react-router'
import Form23 from './forms/form1'


export class Unlogged extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      y:false,
      item:null,
      authFails:true,


    };
    this.onClick = this.onClick.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick1000 = this.onClick1000.bind(this);
  }

onClick(){
    console.log('called "sign up"')
  }
onClick1(){
    console.log('called "sign in"')

    this.setState({y: !this.state.y})
    console.log(this.state.x,this.state.y)
  }
onClick1000(){
  if(true){
           return  <Redirect  to="/posts/" />
       }
}
render(){

  return(
    <div className={s.all}>
      <button className={s.signup} onClick={this.onClick}>
      <NavLink className={s.navlink} to="/registration">
      <span className={s.signup}>Sign up</span></NavLink></button>
      <button className={s.signin} onClick={this.onClick1}>Sign in</button>
      {(this.state.y && !this.props.loging)? <Form login={this.props.login} y={this.state.y}/>:""}
      <br/><button onClick={this.onButtonClick1}>Redirect</button>
      <Form23 />
    </div>
    )
  }
}
