import React from "react"
import s from "./forms.module.css"

export default (props) => {
  let ref1 = React.createRef()
  let ref2 = React.createRef()
  const onClick = () => {
    console.log(ref1.current.value,ref2.current.value)
    if(props.login({
      "login":ref1.current.value,
      "password":ref2.current.value
    })){
    }
  }
  return(
    <div className = {s.window}>
      <span>Login:</span><input placeholder="Логин" ref={ref1} className={s.inp}></input>
      <br/>
      <span>Passw:</span><input placeholder="Пароль" ref={ref2} className={s.inp}></input>
      <br/><br/>
      <button onClick={onClick} className={s.butt}>Войти</button>
    </div>
  )
}
