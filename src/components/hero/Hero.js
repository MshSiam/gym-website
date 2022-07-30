import React from "react"
import Header from "./header/Header"
import css from "./hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Hearts from "../../assets/heart.png"
import calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header></Header>

        {/* add section */}
        <div className="the-best-ad">
          <div></div>
          <span>Stay Fit , Stay Happy.</span>
        </div>

        {/* hero heading  */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span> <span>Your</span>
          </div>
          <div>
            <span>As A Ideal Body</span>
          </div>
          <div>
            <span>
              It may hurt you today, but you will be stronger tomorrow.
              Motivation will get you started, while habit will keep you going
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+12</span> <span>Expert Trainer</span>
          </div>
          <div>
            <span>+330</span> <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span> <span>Fitness Programs</span>
          </div>
        </div>

        {/* hero buttons */}

        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* right side of the hero */}

      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Hearts} alt="" />
          <span>Heart Rate</span> <span>116 bpm</span>
        </div>
        {/* hero image */}
        <img src={hero_image} className="hero-image" alt="hero image" />
        <img
          src={hero_image_back}
          className="hero-image-back"
          alt="hero image back"
        />

        {/* calories div */}
        {/* <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burn</span> <span>220 KCal</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Hero
