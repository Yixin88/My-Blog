import React, { useRef, useState } from "react";

import styles from "./contact-form.module.css";

export default function ContactForm() {
  const [ enteredEmail, setEnteredEmail ] = useState('');
  const [ enteredName, setEnteredName ] = useState('');
  const [ enteredMessage, setEnteredMessage ] = useState('');

  function sendMessageHandler(e) {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)} required />
          </div>

          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" value={enteredName} onChange={e => setEnteredName(e.target.value)} required />
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" value={enteredMessage} onChange={e => setEnteredMessage(e.target.value)} required></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
