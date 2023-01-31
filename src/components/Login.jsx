import React from "react";
import '../css/login.css';

function Login () {
  return (
    <form className={localStorage.getItem('theme') || 'default'}>
      <h2>Test Login Diversity </h2>
      <label htmlFor="login">Login
        <input type="text" className="input is-link" id="login" placeholder="your Login" />
      </label>
      <label htmlFor="password">password
        <input type="text" className="input is-link" id="password" placeholder="Your password" />
      </label>
      <button className="button is-link">Login</button>
    </form>
  )
}

export default Login;