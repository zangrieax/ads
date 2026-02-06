import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Cormorant_Garamond } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  weight: '700',
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-cormorant-garamond',
});

const playfairDisplay = Playfair_Display({
  weight: 'variable',
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Эксклюзивная система привлечения клиентов для агентств элитной недвижимости. Монополия на район. Платите только за результат." />
        <title>NOOVERHEADS | Стратегия эксклюзивного присутствия для элитной недвижимости</title>
      </Head>
      <main className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${bebasNeue.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp