import Head from 'next/head' 
import Page from '../styles/Page.module.css'

export default function Home() {
return (
  <div>
    <Head> 
      <title> Home </title>
    </Head>
    <div className={Page.container}>
      <h1>Home</h1>
    </div>
  </div>
)
}
