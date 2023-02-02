import React from "react";
import '../css/login.css';

function Login () {
  return (
    <section className="form-container">
      <form>
        <h2>Test Login Diversity </h2>
        <label htmlFor="login">Login
          <input type="text" className="input is-link" id="login" placeholder="your Login" />
        </label>
        <label htmlFor="password">password
          <input type="text" className="input is-link" id="password" placeholder="Your password" />
        </label>
        <button className="button is-link">Login</button>
      </form>
    </section>
  )
}

export default Login;