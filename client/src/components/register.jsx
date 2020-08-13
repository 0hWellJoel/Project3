import React from "react";
import loginImg from "./login.svg";
import API from "../utils/Api"
export class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password:''
  }
  onchange = (e)=>{
    let key = e.target.name;
    let value = e.target.value;
    console.log(key,value)
    this.setState({
      [key]:value
    })
  }

  onsubmit = () =>{
    console.log("test");
    API.signup(this.state)
    .then(function(res){
      localStorage.setItem('user', JSON.stringify(res.data));
    })
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
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
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={this.onchange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={this.onchange}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.onsubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}