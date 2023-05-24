import Head from 'next/head' 
import PhotoGrid from '../components/photoGrid'
import Photo from '../styles/Photo.module.css'
import images from '../images/sqimages.json'

export default function Home() {
return (
  <div className={Photo.container}>
    <Head> 
      <title> Home </title>
    </Head>
    <div className={Photo.grid}>
      {images.map((image, index) => (
          <PhotoGrid key={index} imageUrl={image.url} />
        ))}
    </div>
  </div>
) 
}
