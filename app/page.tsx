import Image from "next/image";
import styles from "@/styles/home.module.scss";
import { Brand, Hero, HomeAbout, HomeProject, Service } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <HomeAbout />
      <Brand />
      <HomeProject />
      {/* 
      
    
      <HomeProject />
      <HomeExpert />
      <TeamMember />
      <Universal />
      <Testimonial />
      <Blog /> */}
    </>
  );
}
