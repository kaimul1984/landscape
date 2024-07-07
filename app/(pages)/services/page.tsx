import styles from "@/styles/services.module.scss";
import { Staff } from "@/components";
import { TbCornerUpRightDouble } from "react-icons/tb";
import Image from "next/image";
import { Banner, Button, InfiniteSlider } from "@/constant";
import { consultation, design, mission1, whychooseus } from "@/assests/images";

const Services = () => {
  const items = [
    {
      image: mission1,
      name: "grass cutting",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "garden design",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "plant growing",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "tree planting",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "flower scaping",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "branch cutting",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "pests, weeds control",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "watering & irrigation",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
  ];

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
            {items.map((item) => (
              <div className={styles.card} key={item.name}>
                <Image src={item.image} alt="" />
                <h5>{item.name}</h5>
                <p>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* service we provide */}

      {/* why choose us */}
      <div className={styles.why_choose_us}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>why choose us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
      {/* why choose us */}

      {/* working process */}
      <div className={styles.working_process}>
        <div className={styles.contents}>
          <h2>
            working <span className={styles.span}>process</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took of type and
            scrambled it to make a type specimen book.
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
      {/* working process */}

      {/* cta */}
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
      {/* cta */}
      <Staff />
      <InfiniteSlider />
    </div>
  );
};

export default Services;
