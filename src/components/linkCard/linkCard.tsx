import styles from "./linkCard.module.css";

const linkCard = ({ img1,img2, link, followers, children }: { img1?: string; img2?: string; link?: string; followers?: string; children?: string }) => {
  const hasImage = !!img1; 

  return (
    <a className={styles.containerLinkedCard} href={link || "https://www.linkedin.com/in/ilias-kalantzis/"}>
      <div className={styles.card}>
        {hasImage && (
          <div className={styles.logoImage}>
            {img1 && <img src={img1} alt="Image" className={`${styles.icon} ${styles.imageStyle}`} />}
            <div className={styles.subImage}>
              {img2 && <img src={img2} alt="Image" className={`${styles.icon} ${styles.imageStyle}`} />}
            </div>
          </div>
        )}
        <div className={styles.text}>
          {!hasImage && <p className={styles.fontBold}> {children} </p>}
          {hasImage && <p className={styles.fontBold}>{children}</p>}
          <p className={styles.subText}>{followers}</p>
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



