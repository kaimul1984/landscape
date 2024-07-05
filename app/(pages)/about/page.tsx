import React from "react";
import styles from "@/styles/about.module.scss";
import Banner from "@/constant/Banner/Banner";
import { Brand, Staff } from "@/components";
import Image from "next/image";
import {
  about1,
  about2,
  mission1,
  mission2,
  mission3,
  mission4,
  our_skill,
} from "@/assests/images";

const About = () => {
  const items = [
    {
      image: mission4,
      info: "our mission",
    },
    {
      image: mission3,
      info: "our vission",
    },
    {
      image: mission2,
      info: "our support",
    },
    {
      image: mission1,
      info: "our team",
    },
  ];
  return (
    <div className={styles.about}>
      <Banner name="about us" />

      <div className={styles.container}>
        <h2>about company</h2>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.img1}>
              <Image src={about2} alt="" />
            </div>
            <div className={styles.img2}>
              <Image src={about1} alt="" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <h2>
                <span className={styles.span}>
                  25+ years of experience in <br /> gardening & landscaping
                </span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it make a type specimen book.
              </p>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it make a type specimen book. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className={styles.bottom}>
                {items.map((item) => (
                  <div className={styles.group} key={item.info}>
                    <div className={styles.icon}>
                      <Image src={item.image} alt="" />
                    </div>
                    <h5>{item.info}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about_us}>
          <div className={styles.description}>
            <h3>mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis
              massa uada mi elementum elementum. Nec sapien convallis vulputate
              rhoncus vel dui.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer adipiscing erat eget risus sollicitudin pellentesque
              et non erat. Maecenas nibh dolor, malesuada et bibendum a,
              sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien,
              nec tincidunt nunc posuere ut.
            </p>
          </div>
          <div className={styles.description}>
            <h3>vission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis
              massa uada mi elementum elementum. Nec sapien convallis vulputate
              rhoncus vel dui.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut.
            </p>
          </div>
          <div className={styles.description}>
            <h3>goal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis
              massa uada mi elementum elementum. Nec sapien convallis vulputate
              rhoncus vel dui.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut.
            </p>
          </div>
        </div>
        <div className={styles.our_skills}>
          <div className={styles.left_content}>
            <h3>our skills</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div className={styles.reviews}>
              <div className={styles.content_1}>
                <div>
                  <span>500+</span>
                </div>
                <h5>
                  happy <br /> customers
                </h5>
              </div>
              <div className={styles.content_1}>
                <div>
                  <span>800+</span>
                </div>
                <h5>
                  Garden <br /> created
                </h5>
              </div>
              <div className={styles.content_1}>
                <div>
                  <span>500+</span>
                </div>
                <h5>
                  team <br /> members
                </h5>
              </div>
            </div>
            <div className={styles.skill_bar}>
              <div className={styles.bar}>
                <h5>Garden care</h5>
                <div className={styles.label} />
              </div>
              <div className={styles.bar}>
                <h5>lawn care</h5>
                <div className={styles.label} />
              </div>
              <div className={styles.bar}>
                <h5>tree plantation</h5>
                <div className={styles.label} />
              </div>
              <div className={styles.bar}>
                <h5>pest control</h5>
                <div className={styles.label} />
              </div>
              <div className={styles.bar}>
                <h5>weeds control</h5>
                <div className={styles.label} />
              </div>
            </div>
          </div>
          <div className={styles.right_content}>
            <div className={styles.img1}>
              <Image src={our_skill} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.staff_member}>
          <Staff />
        </div>
        <Brand />
      </div>
    </div>
  );
};

export default About;
