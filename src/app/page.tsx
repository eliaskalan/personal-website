import Image from 'next/image'
import styles from './page.module.css'
import layout from './layouts.module.css'
import Badge from '@/components/badge/badge'
export default function Home() {
  return (
    <main className={layout.mainContainer}>
      <h1>hey, I'm Ilias 👋</h1>
      <Badge img='link'>CSS</Badge>
    </main>
  )
}
