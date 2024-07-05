import React from "react";
import Button from "@/constant/Button/Button";
import styles from "./staff.module.scss";
import {
  facebook,
  linkedin,
  pinterest,
  team1,
  team2,
  team3,
  twitter,
} from "@/assests/images";
import Image from "next/image";

const items = [
  {
    image: team1,
    name: "Amily horper",
    role: "design expert",
  },
  {
    image: team2,
    name: "zenith cooper",
    role: "design expert",
  },
  {
    image: team3,
    name: "zema zane",
    role: "design expert",
  },
  {
    image: team2,
    name: "melisa roza",
    role: "design expert",
  },
];

const Staff = () => {
  return (
    <div className={styles.staff}>
      <div className={styles.container}>
        <h2>
          our <span>trained staff</span>
        </h2>
        <div className={styles.info}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown of type and scrambled it to
            make a type specimen book.
          </p>
          <Button name="discover more" />
        </div>
        <div className={styles.team_members}>
          {items.map((item, index) => (
            <div key={`${item.name}_${index}`} className={styles.slide}>
              <div className={styles.img1}>
                <Image src={item.image} alt="" />
              </div>
              <div className={styles.text}>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
              <div className={styles.text2}>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
                <div className={styles.icon}>
                  <Image src={facebook} alt="" />
                  <Image src={twitter} alt="" />
                  <Image src={pinterest} alt="" />
                  <Image src={linkedin} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
