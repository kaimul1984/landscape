import React from 'react'
import './homeExpert.scss'

import img1 from "../../../assests/images/cleanWorking.png";
import img2 from "../../../assests/images/expertFarmer.png";
import img3 from "../../../assests/images/homeGardening.png";
import img4 from "../../../assests/images/takeCare.png";

const HomeExpert = () => {

    

    const items = [
        {
            image: img1,
            heading: 'clean working',
            info: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit'
    },
        {
            image: img2,
            heading: 'expert farmer',
            info: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit'
    },
        {
            image: img3,
            heading: 'home gardening',
            info: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit'
    },
        {
            image: img4,
            heading: 'proper take care',
            info: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit'
    },
]


  return (
    <div className="homeExpert">
      <div className="container">
        <h6>why choose us</h6>
        <h2>
          <span className="span">expert</span> trusted us
        </h2>
        <div className="wrapper">
          {items.map((item, index) => (
            <div
              key={index}
              className="card active"
             >
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <h3>{item.heading}</h3>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeExpert