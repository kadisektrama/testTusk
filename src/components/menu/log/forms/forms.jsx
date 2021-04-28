import React from "react"
import s from "./forms.module.scss"

export default (props) => {
  let ref1 = React.createRef()
  let ref2 = React.createRef()

  const onClick = () => {
    console.log(props.users)
    let name = props.users.find(item => item.login === ref1.current.value &&
          item.password === ref2.current.value)
    if(name){
        console.log("TRUE")

        props.logged("")
        if(name.role == "passenger"){

        }
        if(name.role == "driver"){

        }
    }else{
        console.log("FALSE")
        alert("Неправильный пароль")
    }

  }
  return(
    <div className = {s.window}>
      <span>Login:</span><input placeholder="Login" ref={ref1} className={s.inp}></input>
      <br/>
      <span>Passw:</span><input placeholder="Pasword" ref={ref2} className={s.inp}></input>
      <br/><br/>
      <button onClick={onClick} className={s.butt}>Sign in</button>
    </div>
  )
}
