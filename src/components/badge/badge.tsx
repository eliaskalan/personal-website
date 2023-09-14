import styles from "./badge.module.css";

const Badge = ({ img, link , children }: { img?: string; link?: string; children: string }) => {
  return (
    <span className={styles.containerBadge}>
      {img && <img src={img} alt="Badge Image" className={styles.icon} />}
      <a href={link} className={styles.text}>
        {children}
      </a>
    </span>
  );
};

export default Badge;