import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../css/header.css";


function Header () {
  const { setTheme } = useContext(ThemeContext);


  const changeTheme = ({ target }) => {
    localStorage.setItem('theme', target.value);
    setTheme(target.value);
  }

  return (
    <header>
      <label htmlFor="theme" className={`select is-link` }>
        <select id="theme" onChange={changeTheme} value={ localStorage.getItem('theme') || 'default' }>
          <option value="default">Default</option>
          <option value="trans">Trans</option>
          <option value="bi">Bi</option>
        </select>
      </label>
    </header>
)
}

export default Header;

