import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from "react"
   

export default function Home() {

  

  return (

      <main className={styles.main}>
        <Head>
          <title>Mememo</title>
          <meta name="description" content="Mememo" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
      

      </main>

   
  )
}
