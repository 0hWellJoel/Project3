import React from "react";
import loginImg from "./login.svg";
import signin from "./registerServiceWorkers"
export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
    NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Passport Authentication</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css" />
          <link href="stylesheets/style.css" rel="stylesheet" />
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <h2>Sign Up Form</h2>
                <form className="signup">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email-input" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password-input" placeholder="Password" />
                  </div>
                  <div style={{display: 'none'}} id="alert" className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
                    <span className="sr-only">Error:</span> <span className="msg" />
                  </div>
                  <button type="submit" className="btn btn-default">Sign Up</button>
                </form>
                <br />
                <p>Or log in <a href="/login">here</a></p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

}
//   render() {
//     return (
//       <div className="base-container" ref={this.props.containerRef}>
//         <div className="header">Register</div>
//         <div className="content">
//           <div className="image">
//             <img src={loginImg} />
//           </div>
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input type="text" name="username" placeholder="username" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="text" name="email" placeholder="email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input type="text" name="password" placeholder="password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Register
//           </button>
//         </div>
//       </div>
//     );
