import React from 'react'
import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPost } from '../lib/posts-util'

export default function HomePage(props) {

  return (
    <>
      <Head>
        <title>Yixin's Blog</title>
        <meta name='description' content='Keeping up with web development news and programming.'/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </>
  )
}


export function getStaticProps() {
  const featuredPosts = getFeaturedPost();

  return {
    props: {posts: featuredPosts},
    revalidate: 60
  }
}
