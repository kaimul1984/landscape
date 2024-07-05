import React from "react";
import styles from "./infiniteSlider.module.scss";
import { logo1, logo2, logo3 } from "@/assests/images";
import Image from "next/image";

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
    {
      image: logo3,
    },
  ];
  return (
    <div className={styles.infiniteSlider}>
      <div className={styles.wrapper}>
        {items.map((item, index) => (
          <div className={styles.box} key={`${index}_${item.image}`}>
            <Image src={item.image} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
