"use client"
import Image from 'next/image';
import styles from './page.module.css';
import layout from './layouts.module.css';
import Badge from '@/components/badge/badge';
import LinkCard from '@/components/linkCard';



export default function Home({repositories} : {repositories: any} ) {
  return (
    <main className={layout.mainContainer}>
      <h1>hey, I&apos;m Ilias 👋</h1>
      <p className={styles.lineSpacing}>
      Hello there! 🚀 I&apos;m an aspiring developer who&apos;s passionate about merging creativity with technology. Allow me to paint a picture: I&apos;m a student at Athens University of Economics and Business by day, 
      and by night, I weave the intricate tapestry of web development using
        <span className={styles.iconSpace}>
          <Badge img='./images/icons/html_icon.png' link='https://developer.mozilla.org/en-US/docs/Web/HTML'>HTML</Badge>
        </span> 
        <span className={styles.iconSpace}>
          <Badge img='./images/icons/css_icon.png' link='https://developer.mozilla.org/en-US/docs/Web/CSS'>CSS</Badge>
        </span> 
        <span className={styles.iconSpace}>
          <Badge img='./images/icons/js_icon.png' link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>JavaScript</Badge>
        </span> 
        and
        <span className={styles.iconSpace}>
          <Badge img='./images/icons/nextjs_icon.png' link='https://nextjs.org/'>Next.js</Badge>
        </span> 
        or
        <span className={styles.iconSpace}>
          <Badge img='./images/icons/nodejs_icon.png' link='https://nodejs.org/en'>Node.js</Badge>
        </span>
      </p>
      <p className={styles.lineSpacing}>
        My academic journey in Computer Science has been a thrilling adventure, marked by consistently high grades and ambitious aspirations. Yet, beneath the academic facade, 
        I harbor a deep passion for photography and the adrenaline rush of Track and Field. Rest assured, I&apos;m not your typical developer. Let&apos;s delve into my world of skills and experiences.
      </p>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <div className={`${styles.gallery__item} ${styles.gallery__item_1}`}>
            <Image src="/images/grid/received_1361751994624546.jpeg" alt="Image 1" width={210} height={160}  objectFit="cover"/>
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_2}`}>
            <Image src="/images/grid/IMG-20220906-WA0008.jpg" alt="Image 2" width={210} height={250}  objectFit="cover"/>
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_3}`}>
            <Image src="/images/grid/DSC_0047.JPG" alt="Image 3" width={210} height={160} objectFit="cover" />
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_4}`}>
            <Image src="/images/grid/IMG_1431.jpg" alt="Image 4" width={210} height={250} objectFit="cover" />
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_5}`}>
            <Image src="/images/grid/received_1451415745605299.jpeg" alt="Image 5" width={210} height={160}  objectFit="cover"/>
          </div>
          <div className={`${styles.gallery__item} ${styles.gallery__item_6}`}>
            <Image src="/images/grid/IMG-20221211-WA0054.jpg" alt="Image 6" width={210} height={250} objectFit="cover"/>
          </div> 
        </div>
      </div>
      <div>
        <p>
        <span className={styles.iconSpace}>
          <Badge img='./images/icons/java_icon.png' link='https://www.java.com/en/'>Java</Badge>
        </span>
        <span className={styles.iconSpace}>
          <Badge img='./images/icons/python_icon.png' link='https://www.python.org/'>Python</Badge>
        </span>
        <span className={styles.iconSpace}>
          <Badge img='./images/icons/git_icon.png' link='https://git-scm.com/'>Git</Badge>
        </span>   
          – these aren&apos;t just buzzwords to me; they&apos;re essential tools in my digital arsenal! 💻 I&apos;ve honed my coding skills to mastery and find joy in seamlessly maneuvering between these programming languages. 
          <span className={styles.iconSpace}>
            <Badge img='./images/icons/sql_icon.png'>SQL</Badge>
          </span> 
          It&apos;s my native tongue, and I&apos;m equally fluent in
          <span className={styles.iconSpace}>
            <Badge img='./images/icons/postgresql_icon.png' link='https://www.postgresql.org/'>PostgreSQL</Badge>
          </span>
           and 
          <span className={styles.iconSpace}>
            <Badge img='./images/icons/mysql_icon.png' link='https://www.mysql.com/'>MySQL</Badge>
          </span>
        </p>
      </div>
      <div className={styles.containerLinkedCards}>
        <LinkCard img1='./images/icons8-github-100.png' link='https://github.com/eliaskalan' followers='Code with me'> @eliaskalan </LinkCard>
        <LinkCard img1='./images/linkedin-96.png' link='https://www.linkedin.com/in/ilias-kalantzis/' followers='Connect with me'> Ilias Kalantzis </LinkCard>
      </div>
      <div>
        <p className={styles.lineSpacing}>
        In the realm of my standout projects, I&apos;ve ventured into the dynamic worlds of Android development and Kotlin expertise while weaving a passion for user-centered design. 
        First, as part of my distributed systems coursework, I crafted a robust Java-based backend to power a distributed messaging app for group chats, seamlessly connecting with an 
        <span className={styles.iconSpace}>
            <Badge img='./images/icons/android_icon.png' link='https://www.android.com/'>Android</Badge>
        </span>
        application and emphasizing a user-friendly UI for seamless interactions. 
        Additionally, I harnessed the versatility of 
        <span className={styles.iconSpace}>
            <Badge img='./images/icons/kotlin_icon.png' link='https://kotlinlang.org/'>Kotlin</Badge>
        </span>
          to reimagine a real dishwasher&apos;s user interface, with a keen focus on enhancing usability, following a meticulous helical model development approach.  Whether you seek a skilled Android developer, a Kotlin enthusiast, or a UX/UI design aficionado, 
          I&apos;m poised to embark on your next tech endeavor. Let&apos;s connect and bring your vision to life. 😉👨‍💻
        </p>
      </div>
      <div>
        <LinkCard link="https://buybook.gr/?utm_source=eliaskalan&utm_medium=project&utm_campaign=buybook" description="For bussiness idea validation we developed several tools to process and collect data from the web. We created a library of scrapy tools to mine the information and pandas to process it appropriately. At the same time we created small databases and scripts to easily present the data to non-technical people" topics={["python","pandas","scrapy","plausible","postgresql"]}>BuyBook</LinkCard>
      </div>
      <div className={styles.cardSpace}>
        {repositories?.map((repo: { name: string; html_url:string; visibility:string; archived:boolean; description:string; topics: string[] }, index:number) => {
            if(repo.visibility == "public" && !repo.archived){
          
              return (<LinkCard key={index} link={repo.html_url} description={repo.description } topics={repo.topics}>{repo.name}</LinkCard>)
            }
            
          }
          )
        }
      </div>
    </main>
  );
}

