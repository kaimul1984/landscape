import React from "react";
import styles from "./singleProject.module.scss";
import { FaChevronRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

type Style = {
  transform: string;
  transition: string;
};

type ItemProps = {
  image: StaticImageData;
  heading: string;
  desc: string;
  desc2: string;
  style: Style;
};

const SingleProject = ({ image, heading, desc, desc2, style }: ItemProps) => {
  return (
    <div className={styles.single_project} style={style}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={image} alt="project-1" />
        </div>
        <div className={styles.desc}>
          <h5>{heading}</h5>
          <p>{desc}</p>
        </div>
      </div>
      <div className={styles.hover_effect}>
        <div className={styles.top}>
          <h5>{heading}</h5>
          <p>{desc2}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.arrow}>
            <FaChevronRight />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
