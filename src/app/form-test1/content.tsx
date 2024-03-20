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

      <form autoComplete='' className='form' onSubmit={submitHandler}>
        <input className='input' type='email' placeholder='type an email' />
        <input className='input' type='password' placeholder='type an password' />
        <input className='input' type='textarea' placeholder='type a comment'/>
 className='input'
        <button type='submit' className='submitBtn'>submit</button>
      </form>

    </div>
  </main>
);
}