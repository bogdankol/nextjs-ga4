import Content from './content'

const url = `https://nextjs-ga4.vercel.app/`
const title = 'Title: main-page'
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

export default function Home() {

    // const adBlockDetected = useDetectAdBlock()

    // console.log({adBlockDetected})

  return (
    <Content />
  );
}
