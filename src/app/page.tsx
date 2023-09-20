import Image from 'next/image';
import styles from './page.module.css';
import layout from './layouts.module.css';
import Badge from '@/components/badge/badge';
import LinkCard from '@/components/linkCard/linkCard';

export default function Home() {
  return (
    <main className={layout.mainContainer}>
      <h1>hey, I&apos;m Ilias 👋</h1>
      <p>I&apos;m a frontend developer, optimist, and community builder. I currently work as the VP of Developer Experience at 
        <span className={layout.iconSpace}>
          <Badge img='./favicon.ico' link='https://vercel.com/'>Vercel</Badge>
        </span>
        , where I lead the community for
        <span className={layout.iconSpace}>
          <Badge img='./favicon.ico' link='https://vercel.com/'>Vercel</Badge>
        </span>
        , an open-source web framework built with 
        <span className={layout.iconSpace}>
          <Badge img='./favicon.ico' link='https://vercel.com/'>Vercel</Badge>
        </span>
      </p>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <div className={`${styles.gallery__item} ${styles.gallery__item_1}`}>
            <Image src="/images/grid/received_1361751994624546.jpeg" alt="Image 1" width={210} height={160} />
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_2}`}>
            <Image src="/images/grid/IMG-20220906-WA0008.jpg" alt="Image 2" width={210} height={250} />
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_3}`}>
            <Image src="/images/grid/DSC_0047.JPG" alt="Image 3" width={210} height={160} />
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_4}`}>
            <Image src="/images/grid/IMG_1431.jpg" alt="Image 4" width={210} height={250} />
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_5}`}>
            <Image src="/images/grid/received_1451415745605299.jpeg" alt="Image 5" width={210} height={160} />
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_6}`}>
            <Image src="/images/grid/IMG-20221211-WA0054.jpg" alt="Image 6" width={210} height={250} />
          </div> 
          
        </div>
      </div>
      <div>
        <p>
        &quot;I create educational content for developers, teaching them about web development, JavaScript and TypeScript, React and Next.js, and more. This comes in all forms: blog posts, videos, tweets, conference talks, and workshops. You can watch some of my favorites below.&quot;
        </p>
      </div>
      <div className={styles.containerLinkedCards}>
        <LinkCard img1='./images/icons8-github-100.png' link='https://github.com/eliaskalan' followers='12 followers'> @eliaskalan </LinkCard>
        <LinkCard img1='./images/linkedin-96.png' link='https://www.linkedin.com/in/ilias-kalantzis/' followers='3 followers'> Ilias Kalantzis </LinkCard>
      </div>
      <div>
        <p>
        &quot;Over the past decade, I&apos;ve written content on my blog and newsletter. I try to keep things simple. You&apos;ll find writing about technologies I&apos;m interested in at the time, or how I&apos;m learning and growing in my career, sharing knowledge along the way.&quot;
        </p>
      </div>
      <div className={styles.cardSpace}>
        <LinkCard>Information Retrieval</LinkCard>
        <LinkCard>Information Retrieval</LinkCard>
        <LinkCard>Information Retrieval</LinkCard>
      </div>
      <div>
        <p>I invest small angel checks into early-stage startups building tools for developers.</p>
      </div>
    </main>
  );
}