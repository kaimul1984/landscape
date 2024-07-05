import React from "react";
import styles from "./button.module.scss";
import Link from "next/link";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const Button = (props: any) => {
  return (
    <Link href="#" className={styles.link}>
      <MdOutlineWifiCalling3 size={25} />

      <span className={styles.name}>{props.name}</span>
    </Link>
  );
};

export default Button;
