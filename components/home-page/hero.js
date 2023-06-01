import React from 'react'
import Image from 'next/image'

import styles from './hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src='/images/site/yixin.png' alt='An image showing Yixin' width={400} height={400}/>
      </div>
      <h1>Hi, I'm Yixin</h1>
      <p>This is a blog to keep up with web development!</p>
    </section>
  )
}
