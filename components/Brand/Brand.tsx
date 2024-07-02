import Image from "next/image";
import styles from "./brand.module.scss";
import { brand1, logo1, logo2, logo3 } from "@/assests/images";

const Brand = () => {
  return (
    <div className={styles.brand}>
      <div className={styles.container}>
        <div className={styles.box}>
          <Image src={brand1} alt="" />
        </div>
        <div className={styles.box2}>
          <div className={styles.box1}>
            <Image src={logo2} alt="" />
          </div>
          <div className={styles.box1}>
            <Image src={logo1} alt="" />
          </div>
          <div className={styles.box1}>
            <Image src={logo3} alt="" />
          </div>
          <div className={styles.box1}>
            <Image src={logo2} alt="" />
          </div>
          <div className={styles.box1}>
            <Image src={logo1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
