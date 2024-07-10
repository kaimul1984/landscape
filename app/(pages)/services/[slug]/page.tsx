import {
  project_2,
  project_3,
  project_4,
  project_5,
  project_8,
} from "@/assests/images";
import { Brochure, Category, WorkingProcess } from "@/components";
import { Banner, Button } from "@/constant";
import styles from "@/styles/serviceDetails.module.scss";
import Image from "next/image";
import { FaArrowRight, FaRegFilePdf } from "react-icons/fa";

const services = [
  { label: "Tree Planting", path: "/" },
  { label: "Garden design", path: "/" },
  { label: "Plant growing", path: "/" },
  { label: "grass cutting", path: "/" },
  { label: "Flower Scaping", path: "/" },
  { label: "Pests, Weeds control", path: "/" },
  { label: "Watering & Irrigation", path: "/" },
  { label: "Branch cutting", path: "/" },
];

export default function ServicesDetails({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  return (
    <div className={styles.services_details}>
      <Banner name="Service Details" />
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>{slug}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
            uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
            vel dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut.
          </p>
          <div className={styles.mainImg}>
            <Image src={project_8} alt="project" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
            uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
            vel dui.
          </p>
          <h3>Advantages of {slug} </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
            uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
            vel dui.
          </p>
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
          <div className={styles.img}>
            <Image src={project_4} alt="project-3" />
            <Image src={project_5} alt="project-3" />
          </div>
        </div>
        <div className={styles.right}>
          <Category categories={services} title="Services" />
          {/* Brochure */}
          <Brochure />
        </div>
      </div>
      <WorkingProcess />
    </div>
  );
}
