import styles from "@/styles/services.module.scss";
import { CallToAction, Staff, WhyChooseUs, WorkingProcess } from "@/components";
import Image from "next/image";
import { Banner, Button, InfiniteSlider } from "@/constant";
import { servicesLists } from "@/assests/data/servicesdata";
import Link from "next/link";

const Services = () => {
  return (
    <div className={styles.services}>
      <Banner name="services" />

      {/* service we provide */}
      <div className={styles.wrapper}>
        <div className={styles.services_provide}>
          <h2>
            service <span className={styles.span}>we provide</span>{" "}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took of type and
            scrambled it to make a type specimen book.
          </p>
          <div className={styles.cards}>
            {servicesLists.map((item) => (
              <Link
                href={`/services/${item.slug}`}
                className={styles.card}
                key={item.name}
              >
                <Image src={item.image} alt="" />
                <h5>{item.name}</h5>
                <p>{item.info}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* service we provide */}
      <WhyChooseUs />
      <WorkingProcess />
      <CallToAction />
      <Staff />
      <InfiniteSlider />
    </div>
  );
};

export default Services;
