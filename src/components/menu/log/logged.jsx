import React from "react"
import s from "./logged.module.css"

export default (props) => {
  let x = false
  const onClick = () => {
    console.log('Profile')
    x = !x
    console.log(x)
  }
  return(
    <div className={s.all}>
      <span><button className={s.all} onClick={onClick}> Profile </button></span>

    </div>
  )
}
