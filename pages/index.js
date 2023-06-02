import React from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

export default function HomePage() {

  const dummyPost = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting started with NextJS',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2023-02-23'
    },
    {
      slug: 'getting-started-with-nextjs2',
      title: 'Getting started with NextJS',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2023-02-23'
    },
    {
      slug: 'getting-started-with-nextjs3',
      title: 'Getting started with NextJS',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2023-02-23'
    },
    {
      slug: 'getting-started-with-nextjs4',
      title: 'Getting started with NextJS',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2023-02-23'
    },
  ]

  return (
    <>
      <Hero />
      <FeaturedPosts posts={dummyPost}/>
    </>
  )
}
