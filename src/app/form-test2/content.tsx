'use client'
import styles from "./page.module.css";
import Link from 'next/link';

export default function Content() {

  const submitHandler = (e: {preventDefault: Function}) => {
    e.preventDefault()

    console.log('submitted')
  }

return (
  <main className={styles.main}>
    <div className={styles.description}>
    <button>button to track 1</button>
    <button>button to track 2</button>

      <Link href={'/'}>/main-page</Link>

      <form autoComplete='' className={styles.form} onSubmit={submitHandler}>
        <input className={styles.input} type='email' placeholder='type an email' />
        <input className={styles.input} type='password' placeholder='type an password' />
        <input className={styles.input} type='textarea' placeholder='type a comment'/>
        <button type='submit' className={styles.submitBtn}>submit</button>
      </form>

    </div>
  </main>
);
}