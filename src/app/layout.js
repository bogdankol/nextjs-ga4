import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { AdBlockDetectedWrapper } from 'adblock-detect-react'
import GA4 from '../components/GA4'
import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

	return (
		<html lang='en'>
			{/* <AdBlockDetectedWrapper> */}
			<body className={inter.className}>

        <GA4 />

<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXMG3SSF"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>


        {children}
      </body>
			{/* </AdBlockDetectedWrapper> */}
			{/* <Script src="/jquery.openxtag.js" type="text/javascript"></Script>  
      <Script type="text/javascript">
        
       {` if(document.getElementById('neARYMwOyKtT')){
          console.log('Blocking Ads: No')
        } else {
          console.log('Blocking Ads: Yes')
        }`}
        
      </Script>   */}

			<Script
				strategy='lazyOnload'
				src='https://www.googletagmanager.com/gtag/js?id=G-P2F6B9SXNT'
        id="G-P2F6B9SXNT"
			></Script>
			<Script
				strategy='lazyOnload'
			>
				{`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-P2F6B9SXNT', {
          scroll_depth: 50
        });`}
			</Script>

      <Script strategy='afterInteractive' id="qwe">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PXMG3SSF');`}
      </Script>

      {/* <Script> 
        {`// Reset Scroll Depth on history change 
        window.addEventListener('popstate', function() { 
          window._gaq.push(['_trackEvent', 'Scroll Depth', 'Reset', 
            location.pathname + location.search + location.hash, , true]); 
          });`} 
      </Script> */}

      {/* to track page views */}
      {/* <GoogleAnalytics gaId="G-P2F6B9SXNT" /> */}
		</html>
	)
}
