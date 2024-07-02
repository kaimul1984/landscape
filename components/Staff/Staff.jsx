import React from 'react'
import Button from '../../constant/Button/Button'

import team1 from "../../assests/images/team1.png";
import team2 from "../../assests/images/team2.png";
import team3 from "../../assests/images/team3.png";
import facebook from "../../assests/images/facebook.png";
import twitter from "../../assests/images/twitter.png";
import linkedin from "../../assests/images/linkedin.png";
import pinterest from "../../assests/images/pinterest.png";

import './staff.scss'

const Staff = () => {
     const items = [
    {
      image: team1,
      name: "Amily horper",
      role: "design expert",
    },
    {
      image: team2,
      name: "zenith cooper",
      role: "design expert",
    },
    {
      image: team3,
      name: "zema zane",
      role: "design expert",
    },
    {
      image: team2,
      name: "melisa roza",
      role: "design expert",
    }
]
  return (
    <div className="staff">
      <div className="container">
        <h2>
          our <span>trained staff</span>
        </h2>
        <div className="info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown of type and scrambled it to
            make a type specimen book.
          </p>
          <Button name="discover more" />
        </div>
        <div className="membars">
          {items.map((item, index) => (
            <div className="slide">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="text">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
              <div className="text2">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
                <div className="icon">
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={pinterest} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Staff