import React from 'react'
import './banner.scss'

//import Navigation from "../../constant/Navigation/Navigation";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";


const Banner = (props) => {

  return (
    <div className="banner">
      <h1>{props.name}</h1>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit
        repudiandae veniam reprehenderit sed eius eveniet veritatis libero
        necessitatibus placeat ullam inventore
      </h6>
      <div className="navigation">
        <Link to="/">Home</Link>
        <FaChevronRight />
        <Link className="green" to={`/${props.name}`}>
          {props.name}
        </Link>
      </div>
    </div>
  );
}

export default Banner