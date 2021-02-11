import Head from 'next/head'
import { Affix, Layout } from 'antd'
import Header from './Header'
import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
const { Footer, Sider, Content } = Layout
const MyLayout = props => {
    const [top, setTop] = useState(0);
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
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        
      </Head>
      <Layout>
        <Affix offsetTop={top}>
          <Header />
        </Affix>
        <Navbar />
        <Hero />

       
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default MyLayout
