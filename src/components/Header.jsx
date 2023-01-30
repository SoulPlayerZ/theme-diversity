import React from "react";
import "../css/header.css"


function Header () {

  const selectTheme = ({ target }) => {
    localStorage.setItem('theme', target.value)

    document.body.style.color = 'red';
    document.body.className = 'a'

    console.log(target.value);
  }

  return (
    <header className={ localStorage.getItem('theme') }>
      <label htmlFor="theme" className="select is-link">
        <select id="theme" onChange={selectTheme}>
          <option value="default">Default</option>
          <option value="trans">Trans</option>
          <option value="bi">Bi</option>
        </select>
      </label>
    </header>
)
}

export default Header;

