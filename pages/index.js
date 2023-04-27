import Head from 'next/head' 
import PhotoGrid from '../components/photoGrid'
import Photo from '../styles/Photo.module.css'

export default function Home() {
return (
  <div className={Photo.container}>
    <Head> 
      <title> Home </title>
    </Head>
    <div className={Photo.grid}>
      <PhotoGrid value="1"/>
      <PhotoGrid value="2"/>
      <PhotoGrid value="3"/>
      <PhotoGrid value="4"/>
      <PhotoGrid value="5"/>
      <PhotoGrid value="6"/>
      <PhotoGrid value="7"/>
      <PhotoGrid value="8"/>
      <PhotoGrid value="9"/>
      <PhotoGrid value="10"/>
      <PhotoGrid value="11"/>
      <PhotoGrid value="12"/>
    </div>
  </div>
)
}
