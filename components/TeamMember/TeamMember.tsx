"use client";
import React, { useRef, useState } from "react";
import styles from "./teamMember.module.scss";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  facebook,
  linkedin,
  pinterest,
  team1,
  team2,
  team3,
  twitter,
} from "@/assests/images";
import Image from "next/image";

const items = [
  { image: team1, name: "Amily Horper", role: "Design Expert" },
  { image: team2, name: "Zenith Cooper", role: "Design Expert" },
  { image: team3, name: "Zema Zane", role: "Design Expert" },
  { image: team2, name: "Melisa Roza", role: "Design Expert" },
  { image: team3, name: "Cathy Hops", role: "Design Expert" },
];

const TeamMember = () => {
  const [selected, setSelected] = useState(0);
  const listRef = useRef<HTMLDivElement | any>();

  const handleLeft = () => {
    setSelected(selected === 0 ? 0 : selected - 1);
  };
  const handleRight = () => {
    setSelected(
      selected === items.length - 3 ? items.length - 3 : selected + 1
    );
  };

  const btns = [
    {
      image: <FaChevronLeft />,
      direction: "left",
    },
    {
      image: <FaChevronRight />,
      direction: "right",
    },
  ];

  // onClick={() => handleLeft("left")}
  //onClick={() => handleRight("right")}
  return (
    <div className={styles.team_member}>
      <div className={styles.container}>
        <h6>meat our team</h6>
        <div className={styles.heading}>
          <h2>
            our <span className={styles.apan}>creative</span> team
          </h2>

          <div className={styles.button}>
            {btns.map((btn, index) => (
              <div
                key={`${index}`}
                // direction={btn.direction}
                className={`${
                  selected === index
                    ? `${styles.btn1} ${styles.active}`
                    : styles.btn1
                }`}
                onClick={() => {
                  btn.direction === "left" ? handleLeft() : handleRight();
                }}
              >
                {btn.image}
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.slider}
          ref={listRef}
          style={{
            transform: `translateX(${
              selected === items.length - 1
                ? (items.length - 1 - selected) * 470
                : -selected * 470
            }px)`,
          }}
        >
          {items.map((item, index) => (
            <div className={styles.slide} key={item.name}>
              <div className={styles.img}>
                <Image src={item.image} alt="" />
              </div>
              <div className={styles.text}>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
              <div
                className={`${
                  selected === index
                    ? `${styles.text2} ${styles.active}`
                    : styles.text2
                }`}
              >
                <h3>{item.name}</h3>
                <p>{item.role}</p>
                <div className={styles.icon}>
                  <Image src={facebook} alt="" />
                  <Image src={twitter} alt="" />
                  <Image src={pinterest} alt="" />
                  <Image src={linkedin} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

// "use client";

// import React, { useState } from "react";
// import styles from "./teamMember.module.scss";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import {
//   facebook,
//   linkedin,
//   pinterest,
//   team1,
//   team2,
//   team3,
//   twitter,
// } from "@/assests/images";
// import Image from "next/image";

// const items = [
//   { image: team1, name: "Amily Horper", role: "Design Expert" },
//   { image: team2, name: "Zenith Cooper", role: "Design Expert" },
//   { image: team3, name: "Zema Zane", role: "Design Expert" },
//   { image: team2, name: "Melisa Roza", role: "Design Expert" },
//   { image: team3, name: "Cathy Hops", role: "Design Expert" },
// ];

// const TeamMember = () => {
//   const [selected, setSelected] = useState(0);

//   // const handleNavigation = (direction: any) => {
//   //   if (direction === "left") {
//   //     setSelected(selected > 0 ? selected - 1 : 0);
//   //   } else {
//   //     setSelected(
//   //       selected < items.length - 1 ? selected + 1 : items.length - 1
//   //     );
//   //   }
//   // };

//   const handleNavigation = (direction: any) => {
//     if (direction === "left") {
//       setSelected((prev) => (prev > 0 ? prev - 1 : prev));
//     } else {
//       setSelected((prev) => (prev < items.length - 1 ? prev + 1 : prev));
//     }
//   };

//   return (
//     <div className={styles.team_member}>
//       <div className={styles.container}>
//         <h6>Meet Our Team</h6>
//         <div className={styles.heading}>
//           <h2>
//             Our <span className={styles.apan}>Creative</span> Team
//           </h2>
//           <div className={styles.button}>
//             <div
//               onClick={() => handleNavigation("left")}
//               className={styles.btn}
//             >
//               <FaChevronLeft />
//             </div>
//             <div
//               onClick={() => handleNavigation("right")}
//               className={styles.btn}
//             >
//               <FaChevronRight />
//             </div>
//           </div>
//         </div>

//         <div
//           className={styles.slider}
//           style={{
//             transform: `translateX(${-selected * 100}%)`,
//             transition: "transform 0.5s ease",
//           }}
//         >
//           {items.map((item, index) => (
//             <div
//               className={`${styles.slide} ${
//                 selected === index ? styles.active : ""
//               }`}
//               key={item.name}
//             >
//               <div className={styles.img}>
//                 <Image src={item.image} alt={item.name} />
//               </div>
//               <div className={styles.text}>
//                 <h3>{item.name}</h3>
//                 <p>{item.role}</p>
//                 <div className={styles.icon}>
//                   <Image src={facebook} alt="Facebook" />
//                   <Image src={twitter} alt="Twitter" />
//                   <Image src={pinterest} alt="Pinterest" />
//                   <Image src={linkedin} alt="LinkedIn" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamMember;
