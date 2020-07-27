import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

  onSubmit = () => {
     if(true){
         return  <Redirect  to="/posts/" />
     }
  }

  render() {
    return (
      <form>
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button onClick={this.onSubmit}>Login</button>
      </form>
    )
  }
}

export default Login;
