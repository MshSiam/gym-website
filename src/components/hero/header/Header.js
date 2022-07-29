import React from "react"
import css from "./header.css"
import logo from "../../../assets/logo.png"

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="website logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>About Us</li>
        <li>Tetimonial</li>
      </ul>
    </div>
  )
}

export default Header
