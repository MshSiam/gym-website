import React, { useState } from "react"
import css from "./header.css"
import logo from "../../../assets/logo.png"
import Bars from "../../../assets/bars.png"
import { Link } from "react-scroll"

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="header">
      <img className="logo" src={logo} alt="website logo" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: ".5rem",
            borderRadius: "5px"
          }}
          onClick={() => {
            setMenuOpened(true)
          }}>
          {" "}
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          {/* <li onClick={() => setMenuOpened(false)}>
            <Link>Home</Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>Programs</li>
          <li onClick={() => setMenuOpened(false)}>About Us</li> */}
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              span={true}
              smooth>
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              span={true}
              smooth>
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smooth>
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              span={true}
              smooth>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonial"
              span={true}
              smooth>
              Tetimonial
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
