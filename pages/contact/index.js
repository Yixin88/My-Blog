import React from 'react'
import Head from 'next/head'

import ContactForm from '../../components/contact/contact-form'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name='description' content='Send me your messages!'/>
      </Head>
      <ContactForm />
    </>
  )
}
