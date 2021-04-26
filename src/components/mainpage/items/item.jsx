import React from "react"
import SomeItem from "./some_item/some_item"
import s from "./item.module.scss"

export default (props) =>{
  const isReady = {props}

  return(
    <ul className={s.int}>
      {!isReady?
        "Loading...":
        props.books && props.books.map(item => (
      <SomeItem  {...item} addBookToBox = {props.addBookToBox}/>
      ))}
    </ul>
  )
}