import React, { useRef, useState } from "react";
import "./teamMember.scss";
//import Carousel from "react-multi-carousel";
//import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import team1 from "../../assests/images/team1.png";
import team2 from "../../assests/images/team2.png";
import team3 from "../../assests/images/team3.png";
import facebook from "../../assests/images/facebook.png";
import twitter from "../../assests/images/twitter.png";
import linkedin from "../../assests/images/linkedin.png";
import pinterest from "../../assests/images/pinterest.png";

const TeamMember = () => {
  const [selected, setSelected] = useState(0);
  const listRef = useRef();

  const handleLeft = () => {
    setSelected(selected === 0 ? 0 : selected - 1);
  };
  const handleRight = () => {
    setSelected(
      selected === items.length - 3 ? items.length - 3 : selected + 1
    );
  };

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
    },
    {
      image: team3,
      name: "cathy hops",
      role: "design expert",
    },
    {
      image: team3,
      name: "cathy hops",
      role: "design expert",
    },
    {
      image: team3,
      name: "cathy hops",
      role: "design expert",
    },
  ];
  const btns = [
    {
      image: <FaChevronLeft />,
      direction: "left",
    },
    {
      image: <FaChevronRight />,
      direction: "right",
    },
  ];

  // onClick={() => handleLeft("left")}
  //onClick={() => handleRight("right")}
  return (
    <div className="team-member">
      <div className="container">
        <h6>meat our team</h6>
        <div className="heading">
          <h2>
            our <span className="span">creative</span> team
          </h2>

          <div className="button">
            {btns.map((btn, index) => (
              <>
                <div
                  key={btn.image}
                  direction={btn.direction}
                  className={selected === index ? " btn1 active" : "btn1"}
                  onClick={() => {
                    btn.direction === "left" ? handleLeft() : handleRight();
                  }}>
                  {btn.image}
                </div>
              </>
            ))}
          </div>
        </div>

        <div
          className="slider"
          ref={listRef}
          style={{
            transform: `translateX(${
              selected === items.length - 1
                ? (items.length - 1 - selected) * 470
                : -selected * 470
            }px)`,
          }}>
          {items.map((item, index) => (
            <div className="slide" key={item.name}>
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="text">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
              <div className={selected === index ? "text2 active" : "text2"}>
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
};

export default TeamMember;
