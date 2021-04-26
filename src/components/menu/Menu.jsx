import React from "react"
import {Time} from "./time/menuTime"
import s from "./Menu.module.scss"
import {NavLink} from 'react-router-dom'
import Logged from "./log/logged"
import {Unlogged} from "./log/unlogged"

const myMenu = (props) => {

  return(
    <div>
      <div className={s.top}>
      <div>666 Broken heart ___</div>
        <div className={s.choiceClauseMenu}>
          <div><NavLink className={s.navlink} to="/">main menu</NavLink></div>
          <div><NavLink className={s.navlink} to="/help">help</NavLink></div>
          <div><NavLink className={s.navlink} to="/securityCustomers">secutity customers</NavLink></div>
          <div><NavLink className={s.navlink} to="/myWish">my wish</NavLink></div>
          <div>
          <button className={s.logout} >{props.loggedform ? <Logged /> : <Unlogged
             logged={props.logged} users={props.users}  loging={props.loggedform}/>}
          </button>
          </div>
        </div>
        <div className={s.time}><Time /></div>
      </div>
    </div>
    )
}
export default myMenu;
