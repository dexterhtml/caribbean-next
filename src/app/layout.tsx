'use client'
// import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app/styles/globals.css"
import "../app/styles/style.css"
import "../app/styles/custom.css"
import "../app/styles/custom1.css"
import "../app/styles/custom2.css"
import Script from "next/script";
import { Noto_Sans } from 'next/font/google'
import Header from "@/component/partials/Header";
import Footer from "@/component/partials/Footer";
const noto = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
})


//  const metadata = {
//   title: "Caribbean Online Bingo Game",
//   description: "Caribbean Online Bingo Game",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <style jsx global>{`
        html {
          font-family: ${noto.style.fontFamily};
        }
      `}</style>
      <head>
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
      </head>
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
