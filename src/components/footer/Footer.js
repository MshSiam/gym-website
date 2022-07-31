import React from "react"
import css from "./footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a target="_blank" href="https://github.com/MshSiam">
            <img src={Github} alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/siam_kenway/">
            <img src={Instagram} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-siam-77703520b/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
        <div className="text">
          <p>&copy; Reserved by Fit Gym Club || Muhammad Siam</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
