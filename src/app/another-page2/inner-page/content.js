'use client'
import Link from 'next/link'
import { useState } from 'react'

export default () => {
	const [result, setResult] = useState(0)

	return (
		<>
			<h1>I am another-page2/inner-page page</h1>

			<button type='button'>I am button without any eventListener</button>

			<div>
				<h4>Counter: {result}</h4>
				<button
					type='button'
					onClick={() => setResult(result + 1)}
				>
					I am button with counter increment
				</button>
				<button
					type='button'
					onClick={() => setResult(result - 1)}
				>
					I am button with counter decrement
				</button>
			</div>
			<button>Just to check data-sending</button>
			<Link href={'/'}>/main-page</Link>
		</>
	)
}
