import { Button } from "@/constant";
import styles from "./callToAction.module.scss";

export default function CallToAction() {
  return (
    <div className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4>
            Our Best Reliable Gardening <br /> and Lawn services
          </h4>
          <Button name="call us" />
        </div>
      </div>
    </div>
  );
}
