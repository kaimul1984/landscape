import React from "react";
import "./blog.scss";
import { RxDoubleArrowRight } from "react-icons/rx";
import project_1 from "../../assests/images/project_1.png";
import project_2 from "../../assests/images/project_2.png";
import project_4 from "../../assests/images/project_4.png";

const Blog = () => {
  const items = [
    {
      image: project_1,
      heading: "garden care",
      date: "sep 6 - 2022",
      desc: "ask the agronomists: lawncare tips from experts",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    },
    {
      image: project_2,
      heading: "landscape",
      date: "sep 6 - 2022",
      desc: "ask the agronomists: lawncare tips from experts",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    },
    {
      image: project_4,
      heading: "planting",
      date: "sep 6 - 2022",
      desc: "ask the agronomists: lawncare tips from experts",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    },
  ];
  return (
    <div className="blog">
      <div className="container">
        <h6>blog news</h6>
        <h2>
          what's <span className="span">latest update</span> in our work
        </h2>
        <div className="blog-container">
          {items.map((item) => (
            <div className="single-blog" key={item.name}>
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="content">
                <div className="name">
                  <h7>{item.heading}</h7>
                  <div className="date">
                    <span>{item.date}</span>
                  </div>
                </div>
                <h5>{item.desc}</h5>
                <p>
                  {item.info}
                </p>
                <div className="link">
                  <a href="#blog">
                    read more <RxDoubleArrowRight />{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
