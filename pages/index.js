import Head from 'next/head'
import { Button } from 'antd'

export default function Home() {
  return (
    <>
     <Head>
        <title>Barber</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=='
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'
          rel='stylesheet'
        />
        
      </Head>
      <Button type='primary' block>
        Primary
      </Button>
    </>
  )
}
