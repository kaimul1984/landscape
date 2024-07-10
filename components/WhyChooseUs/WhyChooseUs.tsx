import styles from "./whyChooseUs.module.scss";
import { whychooseus } from "@/assests/images";
import { Button } from "@/constant";
import Image from "next/image";
import { TbCornerUpRightDouble } from "react-icons/tb";

export default function WhyChooseUs() {
  return (
    <div className={styles.why_choose_us}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>why choose us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={styles.attributes}>
            <div className={styles.attribute}>
              <div className={styles.tick}>
                <TbCornerUpRightDouble />
              </div>
              <h5>proper take care</h5>
            </div>
            <div className={styles.attribute}>
              <div className={styles.tick}>
                <TbCornerUpRightDouble />
              </div>
              <h5>expert farmer</h5>
            </div>
            <div className={styles.attribute}>
              <div className={styles.tick}>
                <TbCornerUpRightDouble />
              </div>
              <h5>clean working</h5>
            </div>
            <div className={styles.attribute}>
              <div className={styles.tick}>
                <TbCornerUpRightDouble />
              </div>
              <h5>home gardening</h5>
            </div>
          </div>
          <Button name="discover more" />
        </div>
        <div className={styles.right}>
          <Image src={whychooseus} alt="" />
        </div>
      </div>
    </div>
  );
}
