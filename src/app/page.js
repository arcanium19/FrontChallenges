import styles from './page.module.css'
//Components Import:
import Start from '@/components/start'
import Projects from '@/components/projects'
import Challenges from '@/components/challenges'
import Buy from '@/components/buy'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <Start />
      <Projects />
      <Challenges />
      <Buy />
      <Contact />
    </main>
  )
}
