import Link from "next/link";
import styles from "./banner.module.scss";
import { FaChevronRight } from "react-icons/fa";

const Banner = ({ name }: { name: string }) => {
  return (
    <div className={styles.banner}>
      <h1>{name}</h1>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit
        repudiandae veniam reprehenderit sed eius eveniet veritatis libero
        necessitatibus placeat ullam inventore
      </h6>
      <div className={styles.navigation}>
        <Link href="/">Home</Link>
        <FaChevronRight />
        <Link className="green" href={`/${name}`}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
