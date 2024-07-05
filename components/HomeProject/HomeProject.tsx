"use client";
import { useState } from "react";

import styles from "./homeProject.module.scss";
import SingleProject from "../SingleProject/SingleProject";
import projectsdata from "@/assests/data/projectsdata";

const HomeProject = () => {
  const [activeFilter, setActiveFilter] = useState("view all");
  const [filterItem, setFilterItem] = useState(projectsdata);
  const [projects, setProjects] = useState(projectsdata);
  const [animation, setAnimation] = useState({ transform: "scale(1)" });

  const handleClickFilter = (item: string) => {
    setActiveFilter(item);
    setAnimation({ transform: "scale(0)" });

    setTimeout(() => {
      setAnimation({ transform: "scale(1)" });

      if (item === "view all") {
        setFilterItem(projectsdata);
        setProjects(projectsdata);
      } else {
        const filteredProject = projects.filter((project) =>
          project.tag.includes(item)
        );
        setFilterItem(filteredProject);
      }
    }, 200);
  };

  return (
    <div className={styles.homeProject}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h6>latest projects</h6>
          <h2>
            <span className={styles.span}>introduce</span> some project
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book..
          </p>
        </div>
        <div className={styles.catagories}>
          {[
            "view all",
            "garden care",
            "lawn care",
            "planting",
            "landscape",
          ].map((item, index) => (
            <div
              key={`${item}_${index}`}
              className={`${
                activeFilter === item
                  ? `${styles.tab_item} ${styles.active}`
                  : styles.tab_item
              }`}
              onClick={() => handleClickFilter(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles.projects}>
          {filterItem.map((data, index) => (
            <SingleProject
              key={`${data.tag}_${index}`}
              image={data.image}
              heading={data.heading}
              desc={data.desc}
              desc2={data.desc2.slice(0, 100)}
              style={{
                transform: animation.transform,
                transition: "transform .5s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
