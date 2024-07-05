"use client";

import React, { useState } from "react";
import styles from "./testimonial.module.scss";

import { FaQuoteLeft } from "react-icons/fa";
import team1 from "../../assests/images/team1.png";
import team2 from "../../assests/images/team2.png";
import team3 from "../../assests/images/team3.png";
import comma from "../../assests/images/comma.png";
import Image from "next/image";

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
    <div className={styles.testimonial}>
      <div className={styles.container}>
        <h6>clients testimonial</h6>
        <h2>
          what our <span className={styles.span}>clients say</span>
        </h2>

        <div
          className={styles.slider}
          style={{
            transform: `translateX(${
              selected === items.length - 1
                ? (items.length - 1 - selected) * 720
                : -selected * 720
            }px)`,
          }}
        >
          {items.map((item, index) => (
            <div
              className={`${
                selected === index
                  ? `${styles.slide} ${styles.active}`
                  : styles.slide
              }`}
              key={item.name}
            >
              <div className={styles.left}>
                <div
                  className={`${
                    selected === index
                      ? `${styles.img} ${styles.active}`
                      : styles.img
                  }`}
                >
                  <Image src={item.image} alt="" />
                </div>
              </div>
              <div
                className={`${
                  selected === index
                    ? `${styles.right} ${styles.active}`
                    : styles.right
                }`}
              >
                <div className={styles.comma}>
                  <FaQuoteLeft />
                </div>
                <p>{item.comment}</p>

                <div className={styles.name}>
                  <h4>{item.name}</h4>
                  <h5>{item.profession}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {Array.from({ length: 5 }).map((i: any, index) => (
            <div
              className={`${
                selected === index
                  ? `${styles.dot} ${styles.active}`
                  : styles.dot
              }`}
              onClick={() => setSelected(index)}
              key={index}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
