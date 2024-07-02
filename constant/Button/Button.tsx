import React from "react";
import styles from "./button.module.scss";

const Button = (props: any) => {
  return (
    <button className={styles.btn}>
      <a href="#">{props.name}</a>
    </button>
  );
};

export default Button;
