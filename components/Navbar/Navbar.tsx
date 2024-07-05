"use client";

import React, { useState } from "react";
import styles from "./navbar.module.scss";

import Button from "@/constant/Button/Button";
import { logo } from "@/assests/images";
import Image from "next/image";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import Social from "@/constant/Social/Social";

const navLInks = [
  { title: "Home", path: "/" },
  { title: "About us", path: "/about" },
  { title: "services", path: "/services" },
  { title: "Projects", path: "/projects" },
  { title: "contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>

        <nav className={`${isOpen ? styles.active : ""}`}>
          <ul>
            {navLInks.map((navLInk) => (
              <li key={navLInk.title}>
                <Link href={`${navLInk.path}`}>{navLInk.title}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.social}>
            <Social />
          </div>
        </nav>
        <div className={styles.right}>
          <div className={styles.button}>
            <Button name="Call now" />
          </div>
          <div
            className={styles.mobile_menu_icon}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FaBarsStaggered size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
