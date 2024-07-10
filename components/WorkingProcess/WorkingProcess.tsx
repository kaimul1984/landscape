import Image from "next/image";
import styles from "./workingProcess.module.scss";
import { consultation, design } from "@/assests/images";

export default function WorkingProcess() {
  return (
    <div className={styles.working_process}>
      <div className={styles.contents}>
        <h2>
          Our work <span className={styles.span}>process</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took of type and scrambled it
          to make a type specimen book.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={consultation} alt="" />
              <span>1</span>
            </div>
            <h5>consultation</h5>
            <p>
              Lorem Ipsum is simply dummy of the printing and typesetting test
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={design} alt="" />
              <span>2</span>
            </div>
            <h5>disign & work</h5>
            <p>
              Lorem Ipsum is simply dummy of the printing and typesetting test
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={design} alt="" />
              <span>3</span>
            </div>
            <h5>maintenance</h5>
            <p>
              Lorem Ipsum is simply dummy of the printing and typesetting test
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={design} alt="" />
              <span>4</span>
            </div>
            <h5>complete</h5>
            <p>
              Lorem Ipsum is simply dummy of the printing and typesetting test
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
