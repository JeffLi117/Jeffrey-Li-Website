import './globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Nav from '@/components/Nav';
import { Oswald } from 'next/font/google'
 
const osw = Oswald({ subsets: ['latin'], weight: '400', })
config.autoAddCss = false;

export const metadata = {
  title: "Jeffrey's Personal Portfolio Website",
  description: "Jeffrey's Personal Portfolio Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
      </head>
      <body>
        <div className={`relative bg-cyan-900 h-screen w-full text-white font-sans`}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
