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
      <div className={styles.imageGrid}>
        <figure className={styles.imageItem}>
          <Image
            src="/images/image.jpg"
            alt="image"
            height={300}
            width={200}
          />
        </figure>
        
        <figure className={styles.imageItem}>
          <Image
            src="/images/image.jpg"
            alt="image"
            width={200}
            height={200}
          />
        </figure>
        
        <figure className={styles.imageItem}>
          <Image
            src="/images/image.jpg"
            alt="image"
            width={220}
            height={400}
          />
        </figure>
      </div>
      <div>
        <p>
          "I create educational content for developers, teaching them about web development, JavaScript and TypeScript, React and Next.js, and more. This comes in all forms: blog posts, videos, tweets, conference talks, and workshops. You can watch some of my favorites below."
        </p>
      </div>
      <div className={styles.containerLinkedCard}>
        <LinkCard img='./favicon.ico'> @iliaskalan </LinkCard>
        <LinkCard img='./favicon.ico'> @iliaskalan </LinkCard>
      </div>
      <div>
        <p>
          "Over the past decade, I've written content on my blog and newsletter. I try to keep things simple. You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my career, sharing knowledge along the way."
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