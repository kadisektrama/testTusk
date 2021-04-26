import React from 'react';
import axios from "axios"
import Menu from "./menu/Menu"
import {MainPage} from "./mainpage/mainPage"
import {Help} from "./mainpage/help"
import {MyWish} from "./mainpage/myWish"
import SecurityCustomers from "./mainpage/securityCustomers"
import {Route} from "react-router-dom"
import {Registration} from "./mainpage/registration"
import {Profile} from "./mainpage/profile"


class App extends React.Component{

  componentDidMount(){
    const {select,selectUsers} = this.props;
    axios.get('http://localhost:3000/books').then(({data}) => { select(data)});
    axios.get('http://localhost:3000/users').then(({data}) => {selectUsers(data)})
  }
  onClick(){
    const {selectReady} = this.props
    selectReady(false);
  }
render(){
  const {books,isReady} = this.props;

  return(
    <div>
      <Menu loggedform={this.props.loggedform} state={this.props.state} logged={this.props.logged}
      searching={this.props.searching} search={this.props.search}
      changestate={this.props.changestate} registrationon={this.props.registrationon}
      select={this.props.select}
      users={this.props.users}/>
      <Route exact path="/" render={() => <MainPage isReady={isReady}
        books={books} addBookToBox = {this.props.addBookToBox}
        box={this.props.box}/> }/>
      <Route path="/help" render={() => <Help /> }/>
      <Route path="/securityCustomers" render={() => <SecurityCustomers/> }/>
      <Route path="/myWish" render={() => <MyWish/> }/>
      <Route  path="/registration"
      render={() => <Registration registrationon={this.props.registrationon}
      loging={this.props.loggedform}/>}/>
      <Route path="/profile" render={() => <Profile unlogged={this.props.unlogged} />}/>
    </div>
  )
}}

export default App
