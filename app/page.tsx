import Image from "next/image";
import styles from "@/styles/home.module.scss";
import {
  Blog,
  Brand,
  Hero,
  HomeAbout,
  HomeExpert,
  HomeProject,
  Service,
  TeamMember,
  Testimonial,
  Universal,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <HomeAbout />
      <Brand />
      <HomeProject />
      <HomeExpert />
      <TeamMember />
      <Universal />
      <Testimonial />
      {/* 
  
    
    

    

  

      <Blog /> */}
    </>
  );
}
