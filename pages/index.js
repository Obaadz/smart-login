import Head from 'next/head'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
    <div>
      <Head>
        <title>Signin Page</title>
        <meta name="description" content="Normal signin page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    </MainLayout>
  )
}
