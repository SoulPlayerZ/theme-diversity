import React, { useContext, useEffect } from "react";
import Login from "../components/Login";
import Header from "../components/Header";
import '../css/login.css';
import ThemeContext from "../context/ThemeContext";

function LoginPage () {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'default');
  })
    
  return (
    <section className={localStorage.getItem('theme') || 'default'}>
        <Header />
        <Login />
    </section>
  )
}

export default LoginPage;