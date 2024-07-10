import React, { ReactNode } from "react";
import styles from "./button.module.scss";
import Link from "next/link";
import { MdOutlineWifiCalling3 } from "react-icons/md";

type ButtonProps = {
  name: string;
  icon?: ReactNode;
};

const Button = ({ name, icon }: ButtonProps) => {
  return (
    <Link href="#" className={styles.link}>
      {icon && icon}

      <span className={styles.name}>{name}</span>
    </Link>
  );
};

export default Button;
