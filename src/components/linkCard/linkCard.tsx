import styles from "./linkCard.module.css";

const linkCard = ({ img, link, children }: { img?: string; link?: string; children?: string }) => {
  const hasImage = !!img; 

  return (
    <a className={styles.containerLinkedCard} href={link || "https://www.linkedin.com/in/ilias-kalantzis/"}>
      <div className={styles.card}>
        {hasImage && (
          <div className={styles.logoImage}>
            {img && <img src={img} alt="Image" className={`${styles.icon} ${styles.imageStyle}`} />}
            <div className={styles.subImage}>
              {img && <img src={img} alt="Image" className={`${styles.icon} ${styles.imageStyle}`} />}
            </div>
          </div>
        )}
        <div className={styles.text}>
          {!hasImage && <p className={styles.fontBold}> {children} </p>}
          {hasImage && <p className={styles.fontBold}>{children}</p>}
          <p className={styles.subText}>11 connections</p>
        </div>
      </div>
      <div>
        <svg className={styles.arrow}>
          <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
        </svg>
      </div>
    </a>
  );
};

export default linkCard;



