import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Эксклюзивная система привлечения клиентов для агентств элитной недвижимости. Монополия на район. Платите только за результат." />
        <title>NOOVERHEADS | Стратегия эксклюзивного присутствия для элитной недвижимости</title>
        

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp