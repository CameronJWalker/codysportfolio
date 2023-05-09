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
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/CityVibes?t=2023-05-09T02%3A48%3A30.087Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/DesertRoad?t=2023-05-09T03%3A08%3A41.196Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Photographer?t=2023-05-09T03%3A15%3A32.259Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Isolated.jpg?t=2023-05-09T03%3A13%3A54.110Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Eclipse.jpg?t=2023-05-09T03%3A13%3A45.793Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/OceanBubbles?t=2023-05-09T03%3A14%3A30.833Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Self.jpg?t=2023-05-09T03%3A14%3A23.289Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/NaturesEyes?t=2023-05-09T03%3A14%3A02.971Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Smoke?t=2023-05-09T03%3A14%3A17.502Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Needle?t=2023-05-09T03%3A14%3A38.546Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Surfer?t=2023-05-09T03%3A14%3A11.190Z"/>
      <PhotoGrid imageUrl="https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/WakeUp.jpg?t=2023-05-09T03%3A15%3A08.700Z"/>
    </div>
  </div>
)
}
