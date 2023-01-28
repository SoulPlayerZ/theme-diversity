import React from "react";
import "../css/header.css"


function Header () {
  return (
    <header>
      <label htmlFor="theme" class="select is-link">
        <select id="theme">
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
        </select>
      </label>
    </header>
)
}

export default Header;

