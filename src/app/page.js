import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bienvenidos a mi pagina de challenges</h1>
      <h4>A continuacion veras algunos de los challenges que resolví en frontend:</h4>
      <div className={styles.menu}>
        <ul>
          <li><Link href='/404-responsive'><p>404 Not Found (responsive)</p></Link></li>
          <li><Link href='#'><p>Más próximamente...</p></Link></li>
        </ul>
      </div>
    </main>
  )
}
