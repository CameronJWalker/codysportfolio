import Head from 'next/head' 
import Page from '../styles/Page.module.css'

export default function Home() {
  return (
    <main className={Page.container}>
      <Head> 
        <title> Home </title>
      </Head>
      <div>Home</div>
    </main>
  )
}
