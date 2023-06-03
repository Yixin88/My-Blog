import React from 'react'
import PostHeader from './post-header'

import styles from './post-content.module.css'

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2023-02-23',
  content: '# This is a first post'
}

export default function PostContent() {

  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}/>
      {DUMMY_POST.content}
    </article>
  )
}
