import { project_3, project_7, project_banner } from "@/assests/images";
import { Brochure, Tag } from "@/components";
import { Banner, InfiniteSlider, Social } from "@/constant";
import styles from "@/styles/projectsDetails.module.scss";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const bottomTags = [
  { label: "Landscaping", path: "/" },
  { label: "Garden", path: "/" },
  { label: "Projects", path: "/" },
];

export default function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  return (
    <div className={styles.projects_details}>
      <Banner name="Project Details" />
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>{slug}</h3>
          <div className={styles.mainImg}>
            <Image src={project_banner} alt="banner" />
          </div>
          <h3>Project summary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            explicabo dicta ipsam nam natus ipsa voluptatum libero porro
            possimus. Nemo dolor facilis at molestiae saepe perferendis cum,
            fugit quibusdam autem! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aliquam, repudiandae at provident inventore non
            optio eveniet soluta perspiciatis dolores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            iste aliquid neque repudiandae quidem! Cum expedita porro libero
            sequi repellat consectetur laborum natus eligendi soluta assumenda
            accusamus accusantium vel excepturi asperiores in dolore vero
            aliquam distinctio praesentium, ducimus velit tempore.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            reiciendis assumenda nemo, temporibus molestiae aut deserunt fugiat
            maxime, itaque optio dolorem reprehenderit laudantium molestias
            facilis quia eos placeat atque cum.
          </p>
          <h3>Project challanges</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            sapiente repellat necessitatibus quia quaerat deleniti perferendis
            nam dignissimos laboriosam provident beatae, culpa, cupiditate sit
            tempore deserunt dolorum reiciendis vitae ex!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste
            eligendi voluptatem officiis inventore tempora alias in nulla,
            dolores necessitatibus. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Saepe, necessitatibus?
          </p>
          <div className={styles.img}>
            <Image src={project_3} alt="project-2" />
            <Image src={project_7} alt="project-2" />
          </div>
          <ul>
            <li>
              <FaArrowRight />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            </li>
            <li>
              <span>
                <FaArrowRight />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            </li>
            <li>
              <span>
                <FaArrowRight />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            </li>
            <li>
              <span>
                <FaArrowRight />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            </li>
            <li>
              <span>
                <FaArrowRight />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            </li>
            <li>
              <span>
                <FaArrowRight />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            </li>
          </ul>
          <div className={styles.bottom}>
            <div className={styles.share}>
              <span>Share:</span>
              <Social />
            </div>
            <Tag tags={bottomTags} style={true} />
          </div>
        </div>
        <div className={styles.right}>
          {/* information */}
          <div className={styles.info}>
            <h3>Project Information</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              repellat itaque dicta ipsam, in ab accusantium repudiandae
              dignissimos amet veniam.
            </p>
            <div className={styles.details}>
              <h4>Clients</h4>
              <span>Indu designer</span>
            </div>
            <div className={styles.details}>
              <h4>Location</h4>
              <span>23 davies st, Sydney, NSW 2000</span>
            </div>
            <div className={styles.details}>
              <h4>Construction date</h4>
              <span>13 may 2024</span>
            </div>
            <div className={styles.details}>
              <h4>Completion Date</h4>
              <span>05 oct 2024</span>
            </div>
            <div className={styles.details}>
              <h4>Price after completion</h4>
              <span>56245$</span>
            </div>
          </div>
          {/* brochure */}
          <Brochure />
        </div>
      </div>
      <InfiniteSlider />
    </div>
  );
}
