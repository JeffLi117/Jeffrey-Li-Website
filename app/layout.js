import './globals.css';
import Nav from '@/components/Nav';

export const metadata = {
  title: "Jeffrey's Personal Portfolio Website",
  description: "Jeffrey's Personal Portfolio Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta http-equiv="Content-Language" content="en" />
      </head>
      <body className="flex justify-center p-3 pt-12 md:p-12 md:pt-14">
        <Nav />
        <div className="lg:flex lg:justify-center w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
