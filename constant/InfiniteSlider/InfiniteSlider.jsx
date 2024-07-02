import React from 'react'
import './infiniteSlider.scss'
//import InfiniteSlider from './InfiniteSlider';

import logo1 from '../../assests/images/logo1.png'
import logo2 from '../../assests/images/logo2.png'
import logo3 from '../../assests/images/logo3.png'

const InfiniteSlider = () => {
    const items = [
        {
            image: logo1,
        },
        {
            image: logo2,
        },
        {
            image: logo3,
        },
        {
            image: logo1,
        },
        {
            image: logo2,
        },
        {
            image: logo3,
        },
        {
            image: logo1,
        },
        
       
    ]
  return (
    <div className="infiniteSlider">
      <div className="wrapper" >
        {items.map((item) => (
            <div className="box" key={item.image}>
                <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider