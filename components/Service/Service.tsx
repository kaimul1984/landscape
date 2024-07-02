import React from "react";
import styles from "./service.module.scss";
import Image from "next/image";
import { farming, group, irrigation } from "@/assests/images";

const Service = () => {
  const items = [
    {
      image: farming,
      info: "skilled gardenar and technician",
    },
    {
      image: group,
      info: "awesome customer service",
    },
    {
      image: irrigation,
      info: "irrigation and drainage service",
    },
  ];
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        {items.map((item) => (
          <div key={item.info} className={styles.servicCard}>
            <Image src={item.image} alt={item.info} />
            <h5>{item.info}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
