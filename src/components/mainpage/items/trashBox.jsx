import React from "react"
import s from "./trashBox.module.scss"


export default (props) => {

  return(
    <div className={s.hideTrashBox}>
      <b className={s.trash}>Корзина:</b><br/>
      {props.box.map((item) => {
        return(
          <div>
            <hr/>
            <div>Название:  {item.name} <br/> id:    {item.id}  Цена:{item.price}</div>
          </div>
        )
      })}<br/>
    </div>
  )
}
