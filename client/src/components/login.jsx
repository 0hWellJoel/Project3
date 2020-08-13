import React, {useState} from "react";
import loginImg from "./login.svg";
import API from "../utils/Api"
import {useHistory} from 'react-router-dom';

function Login(props) {
  const [user, setUser] = useState(''); 
  const history = useHistory();

  onchange = (e)=>{
    let key = e.target.name;
    let value = e.target.value;
    setUser({...user, [key]:value});
    console.log(user);
  }
  onsubmit = ()=>{
    let data = {
      email: user.username,
      password: user.password
    }
    API.login(data)
    .then(function(res){
      localStorage.setItem('user', JSON.stringify(res.data));
      history.push("/home");
    })
    .catch(function(err){
      console.log(err);
      alert("Sorry, auth failed");
    })
  }
    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={onchange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={onchange}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={onsubmit}>
            Login
          </button>
        </div>
      </div>
    )
}

export {Login}