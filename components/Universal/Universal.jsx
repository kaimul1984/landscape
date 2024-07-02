import React from 'react'
import './universal.scss'
import img from '../../assests/images/Img.png'
import leaf from '../../assests/images/leaf.png'
import leaf2 from '../../assests/images/Img-leaf.png'
import Button from '../../constant/Button/Button'

const Universal = () => {
  return (
      <div className="universal">
          <div className="img-2">
              <img src={leaf2} alt="" />
          </div>
          <div className="container">
              <div className="left">
                  <h2>our best reliable <span className="span">gardening <br /> and lawn</span> services</h2>
                  <Button name='call us' />
                  <div className="img">
                      <img src={leaf}    alt="" />
                  </div>
              </div>
              <div className="right">
                  <img src={img} alt="" />
              </div>
          </div>
    </div>
  )
}

export default Universal