import styles from "./footer.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { TiArrowForwardOutline } from "react-icons/ti";
import { MdOutlineLocalPhone, MdOutlineLocalPostOffice } from "react-icons/md";

import Button from "../../constant/Button/Button";
import Image from "next/image";
import { facebook, linkedin, pinterest, twitter } from "@/assests/images";
import { Social } from "@/constant";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {/* about-us */}
        <div className={styles.about_us}>
          <h3>about us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,when an unknown printer took.
          </p>
          <Social />
        </div>
        {/* about-us */}
        {/* contact-us */}
        <div className={styles.contacts}>
          <h3>contact</h3>
          <div className={styles.location}>
            <CiLocationOn />
            <p>
              27 division st,newyork <br /> NY 10003, USA
            </p>
          </div>
          <div className={styles.call}>
            <MdOutlineLocalPhone />
            <p>
              +01234567 <br /> +02345678
            </p>
          </div>
          <div className={styles.mail}>
            <MdOutlineLocalPostOffice />
            <p>email@gmail.com.au</p>
          </div>
        </div>
        {/* contact-us end */}
        {/* quick-links */}
        <div className={styles.links}>
          <h3>links</h3>
          <div className={styles.list}>
            {[
              "home",
              "about",
              "services",
              "project",
              "blog",
              "FAQ",
              "contact us",
              "Thank you",
            ].map((item, index) => (
              <Link href="/" key={index}>
                <FaChevronRight /> {item}
              </Link>
            ))}
          </div>
        </div>
        {/* quick-links end */}

        {/* news-letter */}

        <div className={styles.newsLetter}>
          <h3>newsletter</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,when an unknown printer took.
          </p>
          <div className={styles.input}>
            <input type="email" placeholder="Email" />
            <Button name="subscribe" />
          </div>
        </div>
        {/* news-letter end*/}
      </div>
      {/* copyRight */}
      <div className={styles.copyright}>
        <div className={styles.left}>
          <h6>@copyright,2023. all right reserved</h6>
        </div>
        <div className={styles.right}>
          <div>privacy policy</div>
          <div>sitemap</div>
          <div>Terms of use</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
