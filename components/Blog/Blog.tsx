import styles from "./blog.module.scss";
import { RxDoubleArrowRight } from "react-icons/rx";
import { project_1, project_2, project_4 } from "@/assests/images";
import Image from "next/image";
import Link from "next/link";
// import project_1 from "../../assests/images/project_1.png";
// import project_2 from "../../assests/images/project_2.png";
// import project_4 from "../../assests/images/project_4.png";

const items = [
  {
    image: project_1,
    heading: "garden care",
    slug: "lawncare-tips-from-experts",
    date: "sep 6 - 2022",
    desc: "ask the agronomists: lawncare tips from experts",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    image: project_2,
    heading: "landscape",
    slug: "lawncare-tips-from-experts",
    date: "sep 6 - 2022",
    desc: "ask the agronomists: lawncare tips from experts",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    image: project_4,
    heading: "planting",
    slug: "lawncare-tips-from-experts",
    date: "sep 6 - 2022",
    desc: "ask the agronomists: lawncare tips from experts",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
];

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <h6>blog news</h6>
        <h2>
          what's <span className={styles.span}>latest update</span> in our work
        </h2>
        <div className={styles.blog_container}>
          {items.map((item, index) => (
            <div
              className={styles.single_blog}
              key={`${index}_${item.heading}`}
            >
              <div className={styles.img}>
                <Image src={item.image} alt="" />
              </div>
              <div className={styles.content}>
                <div className={styles.name}>
                  <h6>{item.heading}</h6>
                  <div className={styles.date}>
                    <span>{item.date}</span>
                  </div>
                </div>
                <h5>{item.desc}</h5>
                <p>{item.info}</p>
                <div className={styles.link}>
                  <Link href={`/blogs/${item.slug}`}>
                    read more <RxDoubleArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
