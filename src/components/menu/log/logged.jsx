import React from "react"
import s from "./logged.module.scss"
import {NavLink} from 'react-router-dom'

export default (props) => {
  return(
    <div className={s.all}>

      <div><NavLink className={s.all} to="/profile">Profile</NavLink></div>

    </div>
  )
}
