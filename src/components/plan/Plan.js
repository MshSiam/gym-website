import React from "react"
import { plansData } from "../../data/plansData"
import whiteTik from "../../assets/whiteTick.png"
import css from "./plan.css"

const Plan = () => {
  return (
    <div className="plans-container">
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">ARE YOU READY</span>
        <span>TO START YOUR JOURNEY</span>
        <span className="stroke-text">WITH US ?</span>
      </div>
      <div className="plans-card">
        <div className="plans">
          {plansData.map((plan, i) => {
            return (
              <div key={i} className="plan">
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>
                <div className="features">
                  {plan.features.map((feature, i) => {
                    return (
                      <div className="feature">
                        <img src={whiteTik} alt="" />
                        <span key={i}>{feature}</span>
                      </div>
                    )
                  })}
                </div>

                <button id="btn" className="btn">
                  Join Now
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Plan
