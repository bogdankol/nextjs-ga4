import Content from './content'

const url = `https://nextjs-ga4.vercel.app/another-page`
const title = 'Title: another-page'
export const metadata = {
	metadataBase: new URL(`https://nextjs-ga4.vercel.app`),
	title,
	description: 'description',
	alternates: {
		canonical: url,
	},
	openGraph: {
		title,
		description: 'description',
		url,
		siteName: 'testSite',
		images: [
			{
				url: 'img',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			'max-snippet': -1,
			'max-image-preview': 'large',
			'max-video-preview': -1,
		},
	},
}

export default function Page() {
	return <Content />
}
