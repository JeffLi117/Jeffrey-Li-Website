import './globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Rubik } from 'next/font/google'
import { LightContextProvider } from '@/components/LightMode';
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
config.autoAddCss = false;

const rubik = Rubik({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: "Jeffrey's Personal Portfolio Website",
  description: "Jeffrey's Personal Portfolio Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://www.google.com/recaptcha/enterprise.js?render=6Lev8DEpAAAAAMT9asmfhtnL1PpcsLlTf2UjNQzh"></script> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
      </head>
      <body className={`${rubik.className} relative animate-fadeIn min-h-screen mx-4 md:mx-16 lg:mx-44`}>
        <LightContextProvider>
          <Navbar />
          {children}
          <Footer />
        </LightContextProvider>
      </body>
    </html>
  )
}
