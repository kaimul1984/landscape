import { project_4, project_5 } from "@/assests/images";
import { Category, Tag } from "@/components";
import RecentPosts from "@/components/RecentPosts/RecentPosts";
import { Banner, InfiniteSlider, Social } from "@/constant";
import styles from "@/styles/blogDetails.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaPlus, FaSearch } from "react-icons/fa";

const categories = [
  { label: "Tree Planting", path: "/" },
  { label: "Garden design", path: "/" },
  { label: "Plant growing", path: "/" },
  { label: "grass cutting", path: "/" },
  { label: "Flower Scaping", path: "/" },
  { label: "Pests, Weeds control", path: "/" },
];
const tags = [
  { label: "Landscaping", path: "/" },
  { label: "Garden", path: "/" },
  { label: "Projects", path: "/" },
  { label: "Flowers", path: "/" },
  { label: "Tree Plant", path: "/" },
  { label: "Irrigation", path: "/" },
  { label: "Weeding", path: "/" },
  { label: "Garden care", path: "/" },
];
const bottomTags = [
  { label: "Landscaping", path: "/" },
  { label: "Garden", path: "/" },
  { label: "Projects", path: "/" },
];

export default function BlogDetails() {
  return (
    <div className={styles.blog_details}>
      <Banner name="Blog details" />
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.mainImg}>
            <Image src={project_4} alt="project" />
          </div>
          <div className={styles.admin}>
            <div className={styles.date}>
              <span>sep 6, 2024</span>
              <span>By admin</span>
            </div>

            <span>Comments 10</span>
          </div>
          <h1>Ask the Agronomists: Lawncare tips from the experts</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesq et non erat.
            Maecenas nibh dolor, malesuada et bibend um a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
            uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
            vel dui.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generat Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <div className={styles.qoutes}>
            <p>
              Focus can provide logistics personnel to meet the needs of your
              company project. From logistics managers to warehousemen logistics
              controllers to transport coordinat ors, we can assist you. We
              provide person nel for one-off projects as well as long or
              short-term agency personnel, assist in the recruitment of
              permanent staff, or we can manage your logistics department for.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesq ue et non erat.
            Maecenas nibh dolor, malesuada et bibe ndum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem to ipsum dolor sit amet, consectetur adipiscing
            elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis
            massa uada mi elementum elementum. Nec sapien the convallis
            vulputate rhoncus vel dui.
          </p>
          <div className={styles.img}>
            <Image src={project_5} alt="project" />
            <p className={styles.para}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the to middle of text. All the Lorem Ipsum gener ators
              on the Internet tend to repeat predefined chunks as necessary
              making this the first true.
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.share}>
              <span>Share:</span>
              <Social />
            </div>
            <Tag tags={bottomTags} style={true} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <h3>Search</h3>
            <span>
              <input type="text" placeholder="Search Here..." />
              <FaSearch size={20} color="orange" />
            </span>
          </div>
          {/* recent-posts */}
          <div className={styles.recent_posts}>
            <h3>Recent Posts</h3>
            <RecentPosts />
            <RecentPosts />
            <RecentPosts />
            <RecentPosts />
            <RecentPosts />
          </div>
          {/* category */}
          <Category categories={categories} title="Category" />
          {/* tag */}
          <Tag tags={tags} title="Tags" />
        </div>
      </div>
      <InfiniteSlider />
    </div>
  );
}
