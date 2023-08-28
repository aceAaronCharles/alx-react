import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
    <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label> htmlfor="email"</label>
        <input type="email" id="email" />
        <label> htmlfor="password"</label>
        <input type="password" id="password" />
        <button>Login</button>
    </div>
    </React.Fragment>
  )
}

export default Login