'use client'
import { useState } from 'react'

export default () => {
	const [result, setResult] = useState<number>(0)

	return (
		<>
			<h1>I am another-page3 page</h1>

			<button type='button'>I am button without any eventListener</button>

			<div>
				<h4>Counter: {result}</h4>
				<button 
          type='button'
          onClick={() => setResult(result + 1)}
        >I am button with counter increment</button>
				<button 
          type='button'
          onClick={() => setResult(result - 1)}
        >I am button with counter decrement</button>
			</div>
		</>
	)
}
