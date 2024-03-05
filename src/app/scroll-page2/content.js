'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import s from './styles.module.css'
import { sendGAEvent } from '@next/third-parties/google'

export default () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [reached25Percent, setReached25Percent] = useState(false);
  const [reached50Percent, setReached50Percent] = useState(false);
  const [reached75Percent, setReached75Percent] = useState(false);
  const [reached90Percent, setReached90Percent] = useState(false);
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

    if (scrollPosition >= quarterHeight && !reached25Percent) {
      console.log('You reached 25% of the page height.');
      setReached25Percent(true);
			// window.dataLayer.push({
			// 	event: 'custom_scroll_250',
			// 	gtm: {
			// 		scrollThreshold: 25
			// 	},
			// 	percentScrolled: 25
			// });
			gtag('event', 'custom_scroll_250', {
				'event_category': 'Custom Events',
				'event_label': 'User scrolled 25% of the page',
				'gtm': {
					scrollThreshold: 25
				}
			});
    }
    if (scrollPosition >= halfHeight && !reached50Percent) {
      console.log('You reached 50% of the page height.');
      setReached50Percent(true);
			// window.dataLayer.push({
			// 	event: 'custom_scroll_500',
			// 	gtm: {
			// 		scrollThreshold: 50
			// 	},
			// 	percentScrolled: 50
			// });
			gtag('event', 'custom_scroll_500', {
				'event_category': 'Custom Events',
				'event_label': 'User scrolled 50% of the page',
				'gtm': {
					scrollThreshold: 50
				}
			});
    }
    if (scrollPosition >= threeQuarterHeight && !reached75Percent) {
      console.log('You reached 75% of the page height.');
      setReached75Percent(true);
			// window.dataLayer.push({
			// 	event: 'custom_scroll_750',
			// 	gtm: {
			// 		scrollThreshold: 75
			// 	},
			// 	percentScrolled: 75
			// });
			gtag('event', 'custom_scroll_750', {
				'event_category': 'Custom Events',
				'event_label': 'User scrolled 75% of the page',
				'gtm': {
					scrollThreshold: 75
				}
			});
    }
    if (scrollPosition >= ninetyPercentHeight && !reached90Percent) {
      console.log('You reached 90% of the page height.');
      setReached90Percent(true);
			// window.dataLayer.push({
			// 	event: 'custom_scroll_900',
			// 	gtm: {
			// 		scrollThreshold: 90
			// 	},
			// 	percentScrolled: 90
			// });
			gtag('event', 'custom_scroll_900', {
				'event_category': 'Custom Events',
				'event_label': 'User scrolled 90% of the page',
				'gtm': {
					scrollThreshold: 90
				}
			});
    }

		console.log({dataLayer})
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
