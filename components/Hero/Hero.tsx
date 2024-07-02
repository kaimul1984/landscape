import Button from "@/constant/Button/Button";
import styles from "./hero.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

import Image from "next/image";
import { img3, img_1, review1, review3, star } from "@/assests/images";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <h2>
              planting a <span>garden</span>
            </h2>
            <h2>is </h2>
            <h2>similar to believe </h2>
            <h2> in tomorrow</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              iusto ipsam blanditiis eveniet animi, quo aperiam ad erd
            </p>
            <div className={styles.cta}>
              <Button name="Get a quote" />
              <span>
                see how its work <FaLongArrowAltRight />
              </span>
            </div>
            <div className={styles.review}>
              <div className={styles.image}>
                <div>
                  <Image src={review1} alt="img1" />
                </div>
                <div>
                  <Image src={review3} alt="img2" />
                </div>
                <div>
                  <Image src={review1} alt="img3" />
                </div>
                <div>
                  <Image src={review3} alt="img4" />
                </div>
              </div>
              <div className={styles.ratings}>
                <h3>our happy customer</h3>
                <div className={styles.star}>
                  <Image src={star} alt="star" />
                  <h5>
                    4.8 <span>(12.5k Reviews)</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_img_1}>
            <Image src={img_1} alt="hero-img-1" />
          </div>
          <div className={styles.div1}></div>
          <div className={styles.div2}></div>
          <div className={styles.card}>
            <div className={styles.box}>
              <p>landscaping</p>
            </div>
            <div className={styles.box}>
              <p>lawn maintanace</p>
            </div>
            <div className={styles.box}>
              <p>puring plants</p>
            </div>
            <div className={styles.box}>
              <p>irrigation&pressings</p>
            </div>
          </div>
          <div className={styles.line}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles.right_img_2}>
        <Image src={img3} alt="hero-img-3" />
      </div>
    </div>
  );
};

export default Hero;
