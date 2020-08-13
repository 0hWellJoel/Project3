import React from "react";
import loginImg from "./login.svg";
import API from "../utils/Api"
export class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onchange = (e)=>{
    let key = e.target.name;
    let value = e.target.value;
    this.setState({
      [key]:value
    })
  }
  onsubmit = ()=>{
    console.log("test");
    let user = {
      email: this.state.username,
      password: this.state.password
    }
    API.login(user)
    .then(function(res){
      console.log(res);
    })
    .catch(function(err){
      console.log(err);
      alert("Sorry, auth failed");
    })
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.onchange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.onchange}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.onsubmit}>
            Login
          </button>
        </div>
      </div>
    )
  }
}