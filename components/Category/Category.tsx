import Link from "next/link";
import styles from "./category.module.scss";
import { FaPlus } from "react-icons/fa6";

type Props = {
  categories: {
    label: string;
    path: string;
  }[];
  title: string;
};

export default function Category({ categories, title }: Props) {
  return (
    <div className={styles.category}>
      <h3>{title}</h3>
      {categories.map((item, index) => (
        <div className={styles.category_name} key={`${index}_${item}`}>
          <Link href={`${item.path}`} className={styles.category_link}>
            {item.label}
          </Link>
          <FaPlus />
        </div>
      ))}
    </div>
  );
}
