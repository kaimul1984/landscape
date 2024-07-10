import { project_5 } from "@/assests/images";
import styles from "./recentPosts.module.scss";
import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa";

export default function RecentPosts() {
  return (
    <div className={styles.content}>
      <Image src={project_5} alt="" />
      <div className={styles.text}>
        <h4>16 garden design ideas to make</h4>
        <div>
          <FaCalendar /> <span>Sep 12, 2024</span>
        </div>
      </div>
    </div>
  );
}
