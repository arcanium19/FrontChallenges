"use client"
import React from 'react'
import NavBar from './navBar'
import styles from './styles/start.module.css'
import Image from 'next/image'
import logo from '../../public/logoIA/logoFavicon.png'
import artWork from '../../public/artworkDev.jpg'



const Start = () => {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.left}>
          {/* <Image src={logo} alt='logo' className={styles.logo} /> */}
          <h1><span>Full Stack<br />Web Developer</span></h1>
          <h2>Portfolios, E-Commerces, Landing Pages, API Restful and Data Bases</h2>
        </div>
        <div className={styles.right}>
          <Image src={artWork} alt='artwork' className={styles.artWork} />
        </div>
      </div>
    </main>
  )
}

export default Start