import React from "react"
import s from "./unlogged.module.scss"
import Form from "./forms/forms"
import {NavLink} from 'react-router-dom'

export class Unlogged extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      y:false,
    };
    this.onClickSignUp = this.onClickSignUp.bind(this);
    this.onClickSignIn = this.onClickSignIn.bind(this);
  }

onClickSignUp(){
    console.log('called "sign up"')
  }
onClickSignIn(){
    console.log('called "sign in"')
    this.setState({y: !this.state.y})
    console.log(this.state.x,this.state.y)
  }

render(){

  return(
    <div className={s.all}>
      <button className={s.signup} onClick={this.onClickSignUp}>
      <NavLink className={s.navlink} to="/registration">
      <span className={s.signup}>Sign up</span></NavLink></button>
      <button className={s.signin} onClick={this.onClickSignIn}>Sign in</button>
      {(this.state.y && !this.props.loging)? <Form logged={this.props.logged}
      users={this.props.users} y={this.state.y}/>:""}


    </div>
    )
  }
}
