import React from 'react'
import styles from './styles/navBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logoIA/logoFavicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ul>
          <Link href='#Projects' ><li>Projects</li></Link>
          <Link href='#Challenges' ><li>Challenges</li></Link>
          <Link href='#Buy' ><li>Buy</li></Link>
          <Link href='#ContactMe' ><li>Contact Me</li></Link>
        </ul>
        <button className={styles.btn}><FontAwesomeIcon icon={faPhone}className={styles.theIcon} />Hire Me</button>
      </nav>
    </main>
  )
}

export default NavBar