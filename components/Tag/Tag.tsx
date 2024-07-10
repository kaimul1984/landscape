import Link from "next/link";
import styles from "./tag.module.scss";

type TagProps = {
  tags: {
    label: string;
    path: string;
  }[];
  title?: string;
  style?: boolean;
};

export default function Tag({ tags, title, style }: TagProps) {
  return (
    <div
      className={`${
        style ? `${styles.tags} ${styles.no_shadow}` : styles.tags
      }`}
    >
      {title && <h3>{title}</h3>}
      <div className={styles.tag_link}>
        {tags.map((tag, index) => (
          <Link href={`${tag.path}`} key={`${index}_${tag}`}>
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
