"use client"

import styles from "./linkCard.module.css";
import Badge from '@/components/badge/badge';
import data from '../../../public/programming_languages.json'
import {useEffect, useState} from 'react';
import {ITopics} from './linkCard.d';


const LinkCard = ({ img1,img2, link, followers, children,description,topics }: { img1?: string; img2?: string; link?: string; followers?: string; children?: string; description?:string;topics?: string[]}) => {
  const hasImage = !!img1;
  const hasDescreption = !!description;
  const [topicsBadge, setTopicsBadge] = useState<ITopics[]>([]);
  
  useEffect(() => {
    if(!topics){
      return;
    }
    const newTopicsBade: ITopics[] = topics?.map((topicName) => {
      const programmingLanguage = data.programming_languages.find(
        (language) => language.name === topicName
      );
      return {logo : programmingLanguage ? programmingLanguage.logo_svg : '', name: topicName}
    })
    if(newTopicsBade){
      setTopicsBadge(newTopicsBade)
    }

  }, [topics])

  return (
    <a className={styles.containerLinkedCard} href={link}>
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
          {hasDescreption && <p className={styles.subText}> {description}</p>}
     
                   <div>
                   {topicsBadge.map((topic, index) => (
                    <span key={index} className={styles.badgeTopics} >
                       <Badge  img={topic.logo}>{topic.name}</Badge>
                    </span>
                   ))}
                 </div>
        
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

export default LinkCard;



