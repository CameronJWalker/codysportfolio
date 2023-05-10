import Head from 'next/head' 
import PhotoGrid from '../components/photoGrid'
import Photo from '../styles/Photo.module.css'
import images from '../images.json'

export default function Home() {
return (
  <div className={Photo.container}>
    <Head> 
      <title> Home </title>
    </Head>
    <div className={Photo.grid}>
      <PhotoGrid imageUrl={images.CityVibes.url} alt={images.CityVibes.alt}/>
      <PhotoGrid imageUrl={images.DesertRoad.url} alt={images.DesertRoad.alt}/>
      <PhotoGrid imageUrl={images.Photographer.url} alt={images.Photographer.alt}/>
      <PhotoGrid imageUrl={images.Isolated.url} alt={images.Isolated.alt}/>
      <PhotoGrid imageUrl={images.Eclipse.url} alt={images.Eclipse.alt}/>
      <PhotoGrid imageUrl={images.OceanBubbles.url} alt={images.OceanBubbles.alt}/>
      <PhotoGrid imageUrl={images.Self.url} alt={images.Self.alt}/>
      <PhotoGrid imageUrl={images.NaturesEyes.url} alt={images.NaturesEyes.alt}/>
      <PhotoGrid imageUrl={images.Smoke.url} alt={images.Smoke.alt}/>
      <PhotoGrid imageUrl={images.Needle.url} alt={images.Needle.alt}/>
      <PhotoGrid imageUrl={images.Surfer.url} alt={images.Surfer.alt}/>
      <PhotoGrid imageUrl={images.WakeUp.url} alt={images.WakeUp.alt}/>
    </div>
  </div>
)
}
