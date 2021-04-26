import React from "react"

import s from "./some_item.module.scss"

export default (props)=>{
  const click = () => {
    props.addBookToBox(
      {"name":props.title,
      "id":props.id,
      "price":props.price,
      }
    )
  }
  return(
  <div className={s.int}>
  <li >{props.id + 1}  {props.title} id:{props.id} <br />
  <img className={s.im} src={props.image} alt="sosi xyu" /> <br />
  <div className={s.average}><span className={s.t}>Price: {props.price}
  </span><button onClick={click} className={s.b}>Add book</button></div>
   </li>
   </div>
  )
}
