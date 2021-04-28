import React from "react"
import axios from "axios"
import s from "./Menu.module.scss"
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import Logged from "./log/logged"
import {Unlogged} from "./log/unlogged"
import {Log} from "./Log"
import "./Menu.css"

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
            value:"",
            ref1:React.createRef(),
            ref2:React.createRef(),
            arrayOfBooks:null
        }

    }
    onClick(){
            localStorage.setItem('logged', "false");
            window.location.reload();
    }


    search(){
            console.log("----------")
        console.log(this.props.searchBoo)
        console.log("----------")
        console.log(this.state.ref1.current.value)
        console.log("----------")
        console.log(this.props.books)
        console.log("----------")
        console.log(this.state.arrayOfBooks)
        console.log("----------")
        var name = this.props.searchBoo.find(item => item.title === this.state.ref1.current.value )
        if(name){
            console.log("succes")
            console.log(name)
            let nam = [name]
            this.props.select(nam)
        }


    }
    render(){
  return(
    <div>


      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Главная</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/myWish">статьи<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link s.menuClass" href="/help">помощь</a>
            </li>

          </ul>

            <input class="form-control mr-sm-2 w" type="search" ref={this.state.ref1}
            placeholder="Введите книгу"/>
            <button onClick={() => this.search()}

            class="btn btn-outline-success my-2 my-sm-0" >Поиск</button>


          <div className={s.menuClass}>
              {localStorage.getItem("logged") == "true" ?
              <div>
                <div class="dropdown">
                  <div class=" dropdown-toggle" href="/help"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Профиль
                  </div>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="/profile">Профиль</a>
                    <a class="dropdown-item" href="/myBooks">Мои книги</a>
                    <a class="dropdown-item" onClick={this.onClick} href="/">Выйти</a>
                  </div>
                </div>
              </div>
              : <div>
                <a class="nav-link" data-toggle="modal" data-target="#exampleModal" href="/help">ВОЙТИ</a>
              </div>
              }

              <Log  logged={this.props.logged}
                          users={this.props.users} />
          </div>
        </div>
      </nav>


    </div>
    )
    }
}
export default App;
