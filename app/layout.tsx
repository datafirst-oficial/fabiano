import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from 'next/font/google'

const playfair_display = Playfair_Display({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-playfair-display', // <- Aqui está a mágica
})
const inter = Inter({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Plano JK | Altair Toledo",
  description: "10 Anos de Crescimento em 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PKF2T6WV')
        `}} />
      </head>
      <body
        className={`${playfair_display.variable} ${inter.className}`}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKF2T6WV"
          height="0" width="0"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}