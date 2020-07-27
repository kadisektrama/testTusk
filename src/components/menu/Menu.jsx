import React from "react"
import {Time} from "./time/menuTime"
import s from "./Menu.module.css"
import {NavLink} from 'react-router-dom'
import Logged from "./log/logged"
import {Unlogged} from "./log/unlogged"

const myMenu = (props) => {
  let ref1 = React.createRef()
  let test = false
  const change = () => {
    console.log(ref1.current.value);
  }
  const onClick = () => {
    console.log('')
  }
  const box = () => {
    console.log("box open")
    props.changestate()
    console.log(props.state)
  }
  return(
    <div>
      <div className={s.top}>
      <div>666 Broken heart ___</div>
        <div className={s.choiceClauseMenu}>
          <div><NavLink className={s.navlink} to="/">main menu</NavLink></div>
          <div><NavLink className={s.navlink} to="/help">help</NavLink></div>
          <div><NavLink className={s.navlink} to="/security_customers">secutity customers</NavLink></div>
          <div><NavLink className={s.navlink} to="/my_wish">my wish</NavLink></div>
          <div>
          <button className={s.logout} onClick={onClick}>{props.loggedform ? <Logged /> : <Unlogged
             login={props.login} loging={props.loggedform}/>}
          </button>
          </div>
        </div>
        <div className={s.time}><Time /></div>
      </div>
    </div>
    )
}
export default myMenu;
