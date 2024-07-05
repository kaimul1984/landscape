import React from "react";
import styles from "./universal.module.scss";
import Image from "next/image";
import Button from "@/constant/Button/Button";
import { img, leaf, leaf2 } from "@/assests/images";

const Universal = () => {
  return (
    <div className={styles.universal}>
      <div className={styles.img_2}>
        <Image src={leaf2} alt="" />
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            our best reliable{" "}
            <span className={styles.span}>
              gardening <br /> and lawn
            </span>{" "}
            services
          </h2>
          <Button name="call us" />
          <div className={styles.img}>
            <Image src={leaf} alt="leaf" />
          </div>
        </div>
        <div className={styles.right}>
          <Image src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Universal;
