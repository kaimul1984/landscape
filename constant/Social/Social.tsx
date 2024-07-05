import React from "react";
import styles from "./social.module.scss";
import { facebook, linkedin, pinterest, twitter } from "@/assests/images";
import Image from "next/image";

export default function Social() {
  return (
    <div className={styles.icon}>
      <Image src={facebook} alt="facebook" />
      <Image src={twitter} alt="twitter" />
      <Image src={pinterest} alt="pinterest" />
      <Image src={linkedin} alt="linkedin" />
    </div>
  );
}
