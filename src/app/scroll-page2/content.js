'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import s from './styles.module.css'

export default () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	useEffect(() => {
		const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
	}, [])

	useEffect(() => {
    const pageHeight = document.body.scrollHeight;
    const quarterHeight = pageHeight * 0.25;
    const halfHeight = pageHeight * 0.5;
    const threeQuarterHeight = pageHeight * 0.75;
    const ninetyPercentHeight = pageHeight * 0.9;

    if (scrollPosition === quarterHeight) {
      console.log('You reached 25% of the page height.');
    }
    if (scrollPosition === halfHeight) {
      console.log('You reached 50% of the page height.');
    }
    if (scrollPosition === threeQuarterHeight) {
      console.log('You reached 75% of the page height.');
    }
    if (scrollPosition === ninetyPercentHeight) {
      console.log('You reached 90% of the page height.');
    }
  }, [scrollPosition]);

	

	return (
		<>
			<h1>I am scroll-page2 page</h1>

			<button type='button'>I am button without any eventListener</button>

			<div className={s.container}>
				<h4>Counter</h4>
				<button>button to track 1</button>
    <button>button to track 2</button>
				<Link href={'/'}>/main-page</Link>
			</div>
			
		</>
	)
}
