import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <Script src="/jquery.openxtag.js" type="text/javascript"></Script>  
      <Script type="text/javascript">
        
       {` if(document.getElementById('neARYMwOyKtT')){
          console.log('Blocking Ads: No')
        } else {
          console.log('Blocking Ads: Yes')
        }`}
        
      </Script>   */}
      
      
      
      
      
    </html>
  );
}
