import React, { useState } from "react";
import "./testimonial.scss";

import { FaQuoteLeft } from "react-icons/fa";
import team1 from '../../assests/images/team1.png';
import team2 from '../../assests/images/team2.png';
import team3 from '../../assests/images/team3.png';
import comma from '../../assests/images/comma.png'

const Testimonial = () => {
  const [selected, setSelected] = useState(0);



  const items = [
    {
      image: team1,
      name: "amily cooper",
      profession: "designer",
      comment:
        "One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file",
    },
    {
      image: team2,
      name: "max quilton",
      profession: "developer",
      comment:
        "One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file",
    },
    {
      image: team3,
      name: "james watson",
      profession: "runner",
      comment:
        "One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file",
    },
    {
      image: team2,
      name: "nick stanton",
      profession: "walker",
      comment:
        "One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file",
    },

    {
      image: team1,
      name: "brett maxwell",
      profession: "whatever",
      comment:
        "One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file",
    },
    {
      image: team3,
      name: "brad ford",
      profession: "designer",
      comment:
        "One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file",
    },
  ];

  return (
    <div className="testimonial">
      <div className="container">
        <h6>clients testimonial</h6>
        <h2>
          what our <span className="span">clients say</span>
        </h2>
        <div
          className="slider"
          style={{
            transform: `translateX(${
              selected === items.length - 1
                ? (items.length - 1 - selected) * 720
                : -selected * 720
            }px)`,
          }}>
          {items.map((item, index) => (
            <div
              className={selected === index ? "slide active" : "slide"}
              key={item.name}>
              <div className="left">
                <div className={selected === index ? "img active" : "img"}>
                  <img src={item.image} alt="" />
                </div>
              </div>
              <div className={selected === index ? "right active" : "right"}>
                <div className="comma">
                  <FaQuoteLeft />
                </div>
                <p>{item.comment}</p>

                <div className="name">
                  <h4>{item.name}</h4>
                  <h5>{item.profession}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              className={selected === index ? "dot active" : "dot"}
              onClick={() => setSelected(index)}
              key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
