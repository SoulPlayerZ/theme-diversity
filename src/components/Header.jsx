import React from "react";
import "../css/header.css"


function Header () {

  const selectTheme = ({ target }) => {
    localStorage.setItem('theme', target.value)
    // document.body.style.color= 'red';
    console.log(target.value);
  }

  return (
    <header className={ localStorage.getItem('theme') }>
      <label htmlFor="theme" className="select is-link">
        <select id="theme" onChange={selectTheme}>
          <option value="Default">Default</option>
          <option value="Trans">Trans</option>
          <option value="Bi">Bi</option>
        </select>
      </label>
    </header>
)
}

export default Header;

