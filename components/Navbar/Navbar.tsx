"use client";

import React, { useState } from "react";
import styles from "./navbar.module.scss";

import Button from "@/constant/Button/Button";
import { logo } from "@/assests/images";
import Image from "next/image";
import Link from "next/link";
import { FaBarsStaggered, FaChevronDown } from "react-icons/fa6";
import Social from "@/constant/Social/Social";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";

export const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about us",
    path: "/about",
  },

  {
    title: "Services",
    path: "/services",
    icon: FaChevronDown,
    children: [
      {
        title: "Grass Cutting",
        path: "/services/grass-cutting",
      },
      {
        title: "Garden Design",
        path: "/services/garden-design",
      },
      {
        title: "Plant Growing",
        path: "/services/Plant-growing",
      },
      {
        title: "Tree Planting",
        path: "/services/tree-Planting",
      },
      {
        title: "Flower Scaping",
        path: "/services/garden-design",
      },
    ],
  },

  {
    title: "projects",
    path: "/projects",
  },
  {
    title: "blogs",
    path: "/blogs",
  },
  {
    title: "contact us",
    path: "/contact",
  },
];

// const navLInks = [
//   { title: "Home", path: "/" },
//   { title: "About us", path: "/about" },
//   { title: "services", path: "/services" },
//   { title: "Projects", path: "/projects" },
//   { title: "contact", path: "/contact" },
// ];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<number | boolean>(false);

  const toggle = (index: number) => {
    if (isOpen === index) {
      return setIsOpen(false);
    } else {
      setIsOpen(index);
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>

        <nav className={`${isOpen ? styles.active : ""}`}>
          <ul className={styles.nav_ul}>
            {navLinks.map((navLInk, index) => (
              <li key={navLInk.title} className={styles.nav_li}>
                <span>
                  <Link
                    href={`${navLInk.path}`}
                    onClick={() => setIsOpen(false)}
                    className={styles.nav_link}
                  >
                    {navLInk.title}
                  </Link>
                  {navLInk.icon && (
                    <navLInk.icon onClick={() => toggle(index)} />
                  )}
                </span>
                <ul
                  className={`${
                    isOpen === index
                      ? `${styles.sub_ul} ${styles.active}`
                      : styles.sub_ul
                  }`}
                >
                  {navLInk.children &&
                    navLInk.children.map((subLink) => (
                      <li
                        className={styles.sub_li}
                        key={subLink.title}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link
                          href={`${subLink.path}`}
                          className={styles.sub_link}
                        >
                          {subLink.title}
                        </Link>
                        <FaChevronRight />
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className={styles.social}>
            <Social />
          </div>
        </nav>
        <div className={styles.right}>
          <div className={styles.button}>
            <Button
              name="Call now"
              icon={<MdOutlineWifiCalling3 size={25} />}
            />
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
