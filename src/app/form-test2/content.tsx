'use client'
import styles from "./page.module.css";
import Link from 'next/link';
import { useRef } from 'react';

export default function Content() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const commentRef = useRef()

  const validate = () => {
    
  }

  console.log({emailRef})

  const submitHandler = (e: {preventDefault: Function}) => {
    e.preventDefault()
    validate()

    console.log('submitted')
  }

return (
  <main className={styles.main}>
    <div className={styles.description}>
    <button>button to track 1</button>
    <button>button to track 2</button>

      <Link href={'/'}>/main-page</Link>

      <form autoComplete='' className={styles.form} onSubmit={submitHandler}>
        <input ref={emailRef} className={styles.input} type='email' placeholder='type an email' />
        <input ref={passwordRef} className={styles.input} type='password' placeholder='type an password' />
        <input ref={commentRef} className={styles.input} type='textarea' placeholder='type a comment'/>
        <button type='submit' className={styles.submitBtn}>submit</button>
      </form>

    </div>
  </main>
);
}