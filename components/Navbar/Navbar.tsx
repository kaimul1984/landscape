import React from "react";
import styles from "./navbar.module.scss";

import Button from "@/constant/Button/Button";
import { logo } from "@/assests/images";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.menu}>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.button}>
            <Button name="Call now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
