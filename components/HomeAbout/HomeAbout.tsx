import React from "react";
import styles from "./homeAbout.module.scss";
import Button from "@/constant/Button/Button";
import Image from "next/image";
import { aboutImg, group7 } from "@/assests/images";

const HomeAbout = () => {
  return (
    <div className={styles.homeAbout}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.bg} />
          <div className={styles.img}>
            <Image src={aboutImg} alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <h6>about us</h6>
          <h2>
            we are <span className={styles.span}>professional gardener </span>
            <br /> & <span className={styles.span}>lawn service</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <Button name="get a quote" />
        </div>
      </div>
      <div className={styles.outer_img}>
        <Image src={group7} alt="" />
      </div>
    </div>
  );
};

export default HomeAbout;
