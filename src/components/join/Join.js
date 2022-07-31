import React from "react"
import { useRef } from "react"
import css from "./join.css"
import emailjs from "@emailjs/browser"

const Join = () => {
  const form = useRef()
  //   send email

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_oujy145",
        "template_er0x1fw",
        form.current,
        "user_laJsMsMHHLraltzBdFk4s"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form onSubmit={sendEmail} action="">
          <input
            ref={form}
            className="email-container
          "
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
          />
          <button type="submit" className="btn btn-j">
            Join Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Join
