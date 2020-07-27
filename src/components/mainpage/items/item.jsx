import React from "react"
import Some_item from "./some_item/some_item"
import s from "./item.module.css"

export default (props) =>{
  const isReady = {props}

  return(
    <ul className={s.int}>
      {!isReady?
        "Loading...":
        props.books && props.books.map(item => (
      <Some_item  {...item} addBookToBox = {props.addBookToBox}/>
      ))}
    </ul>
  )
}
