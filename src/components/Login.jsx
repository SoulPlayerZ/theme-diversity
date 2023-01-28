import React from "react";
import '../css/login.css';

function Login () {
  return (
    <form>
      <h2>Test Login Diversity </h2>
      <label htmlFor="login">Login
        <input type="text" class="input is-link" id="login" placeholder="your Login" />
      </label>
      <label htmlFor="password">password
        <input type="text" class="input is-link" id="password" placeholder="Your password" />
      </label>
      <button class="button is-link">Login</button>
    </form>
  )
}

export default Login;