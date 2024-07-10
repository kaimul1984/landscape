import { FaRegFilePdf } from "react-icons/fa";
import styles from "./brochure.module.scss";
import { BiDownload } from "react-icons/bi";
import { Button } from "@/constant";

export default function Brochure() {
  return (
    <div className={styles.brochure}>
      <h3>Brochure</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in
        neque quo voluptatibus enim debitis?
      </p>
      <h4>Download file</h4>
      <div className={styles.flie_download}>
        <span>
          <FaRegFilePdf />
          Info Company
        </span>
        <BiDownload />
      </div>
      <div className={styles.flie_download}>
        <span>
          <FaRegFilePdf />
          Brochure newest
        </span>
        <BiDownload />
      </div>
      <Button name="get a Qoute" />
    </div>
  );
}
