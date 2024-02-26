'use client'
import Link from 'next/link'
import { useState } from 'react'
import s from './styles.module.css'

export default () => {
	const [result, setResult] = useState(0)

	return (
		<>
			<h1>I am scroll-page1 page</h1>

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
