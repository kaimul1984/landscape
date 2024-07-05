import styles from "@/styles/contact.module.scss";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelopeOpenText, FaPeriscope } from "react-icons/fa";
import { Banner, InfiniteSlider } from "@/constant";
import { Universal } from "@/components";
import { facebook, linkedin, pinterest, twitter } from "@/assests/images";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Banner name="contact" />

      <div className={styles.container}>
        <div className={styles.left}>
          <h2>contact us</h2>

          <form action="">
            <div className={styles.name}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={styles.email}>
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone No." />
            </div>
            <div className={styles.subject}>
              <input type="text" placeholder="Subject" />
            </div>
            <div className={styles.textarea}>
              <textarea
                name="text"
                id="text"
                placeholder="Write a message"
                cols={30}
                rows={12}
              ></textarea>
            </div>
            <div className={styles.submit}>
              <input type="submit" />
            </div>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <h2>get in touch</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry. Lorem Ipsum has been the industry.
            </p>

            <div className={styles.call}>
              <FaPhoneAlt />
              <span>+01 123456789, 1234567890</span>
            </div>
            <div className={styles.email}>
              <FaEnvelopeOpenText />
              <span>Plantingservice@gmail.com</span>
            </div>
            <div className={styles.location}>
              <FaPeriscope />
              <span>2072 Pinnickinick Street, WA 98370</span>
            </div>
            <div className={styles.social}>
              <Image src={facebook} alt="" />
              <Image src={twitter} alt="" />
              <Image src={pinterest} alt="" />
              <Image src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Universal />
      <InfiniteSlider />
    </div>
  );
};

export default Contact;
