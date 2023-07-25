import Image from "next/image"
import styles from "./page.module.css"
import errorLogo from "../../../public/error404.svg"
import Link from "next/link"

const Error404 = () => {
  return (
    <main className={styles.main}>
        <div className={styles.title}><h3>404 not found</h3></div>
        <div className={styles.container}>
            <Image src={errorLogo} alt="Error404" className={styles.svg404}/>
            <div className={styles.textContainer}>
                <h1>I have bad news for you</h1>
                <h4>The page you are looking for might be removed or is temporarily unavailable</h4>
                <Link href='/'><button className={styles.btn}>Back to homepage</button></Link>
            </div>
        </div>
        <footer className={styles.footer}>
            <p>created by @arcanium19 at GitHub - devChallenges.io</p>
        </footer>
    </main>
  )
}

export default Error404