import Image from "next/image";
import styles from "./homeExpert.module.scss";
import {
  cleanWorking,
  expertFarmer,
  homeGardening,
  takeCare,
} from "@/assests/images";

const HomeExpert = () => {
  const items = [
    {
      image: cleanWorking,
      heading: "clean working",
      info: "Lorem ipsum dolor sit amet con sectetur adipisicing elit",
    },
    {
      image: expertFarmer,
      heading: "expert farmer",
      info: "Lorem ipsum dolor sit amet con sectetur adipisicing elit",
    },
    {
      image: homeGardening,
      heading: "home gardening",
      info: "Lorem ipsum dolor sit amet con sectetur adipisicing elit",
    },
    {
      image: takeCare,
      heading: "proper take care",
      info: "Lorem ipsum dolor sit amet con sectetur adipisicing elit",
    },
  ];

  return (
    <div className={styles.homeExpert}>
      <div className={styles.container}>
        <h6>why choose us</h6>
        <h2>
          <span className={styles.span}>expert</span> trusted us
        </h2>
        <div className={styles.wrapper}>
          {items.map((item, index) => (
            <div key={index} className={`${styles.card} ${styles.active}`}>
              <div className={styles.img}>
                <Image src={item.image} alt={item.heading} />
              </div>
              <h3>{item.heading}</h3>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeExpert;
