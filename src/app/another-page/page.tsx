'use client'
import Link from 'next/link'
import { useState } from 'react'

const url = `https://nextjs-ga4.vercel.app/another-page`
const title = 'Title: another-page'
export const metadata = {
	metadataBase: new URL(`https://nextjs-ga4.vercel.app`),
	title,
	description: 'description',
	alternates: {
		canonical: url
	},
	openGraph: {
		title,
		description: 'description',
		url,
		siteName: 'VyOS',
		images: [
			{
				url: 'img'
			}
		],
		locale: 'en_US',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			'max-snippet': -1,
			'max-image-preview': 'large',
			'max-video-preview': -1
		}
	}
}

export default () => {
	const [result, setResult] = useState<number>(0)

	return (
		<>
			<h1>I am another-page page</h1>

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

			<Link href={'/another-page/inner-page'}>/inner-page</Link>
			<Link href={'/'}>/main-page</Link>


		</>
	)
}
