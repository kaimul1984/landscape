import { HomeProject, Universal } from "@/components";
import { Banner, InfiniteSlider } from "@/constant";
import styles from "@/styles/projects.module.scss";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Banner name="Projects" />
      <div className={styles.home_projects}>
        <HomeProject />
        <div className={styles.pagination}>
          <button>
            <FaChevronLeft />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <Universal />
      <InfiniteSlider />
    </div>
  );
};

export default Projects;
