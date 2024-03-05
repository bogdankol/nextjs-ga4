'use client'
import Link from 'next/link'
import { useState } from 'react'
import s from './styles.module.css'

export default () => {
	function sendEventToGA4(eventName, eventValue) {
		if (typeof window.dataLayer !== 'undefined') {
			window.dataLayer.push({
				event: eventName,
				value: eventValue,
			});
		} else {
			console.error("Data layer not found. GA4 event not sent.");
		}
	}

	return (
		<>
			<h1>I am test-click page</h1>


			<div className={s.container}>
				<h4>Counter</h4>

				<button 
					type='button' 
					className={s.btn}
					onClick={() => sendEventToGA4(
						'custom_click_from_code',
						'custom_value_from_code'
					)}
				>I am button to test custom event</button>

				<Link href={'/'}>/main-page</Link>
			</div>
			
		</>
	)
}
