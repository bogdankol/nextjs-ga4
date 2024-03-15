'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { ads } from './ads';
import { useEffect } from 'react';
import { useDetectAdBlock } from "adblock-detect-react";
import Link from 'next/link';

export default function Content() {

  // const adBlockDetected = useDetectAdBlock()

  // console.log({adBlockDetected})

return (
  <main className={styles.main}>
    <div className={styles.description}>
    <button>button to track 1</button>
    <button>button to track 2</button>

      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>src/app/page.js</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>

    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>

    <div className={styles.grid}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Learn <span>-&gt;</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Templates <span>-&gt;</span>
        </h2>
        <p>Explore starter templates for Next.js.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Deploy <span>-&gt;</span>
        </h2>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>

      <Link href={'/another-page'}>/another-page</Link>
      <Link href={'/another-page/inner-page'}>/another-page/inner-page</Link>
      <Link href={'/another-page2'}>/another-page2</Link>
      <Link href={'/another-page2/inner-page'}>/another-page2/inner-page</Link>
      <Link href={'/another-page3'}>/another-page3</Link>
      <Link href={'/another-page3/inner-page'}>/another-page3/inner-page</Link>
      <Link href={'/scroll-page1'}>/scroll-page1</Link>
      <Link href={'/scroll-page2'}>/scroll-page2</Link>
      <Link href={'/click-test'}>/click-test</Link>
      <Link href={'/video-test1'}>/video-test1</Link>
      <Link href={'/video-test2'}>/video-test2</Link>

    </div>
  </main>
);
}