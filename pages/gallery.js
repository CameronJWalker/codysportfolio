import Head from "next/head"
import Gallery from "../styles/Gallery.module.css"
import Link from "next/link"

export default function gallery(){

    const Eclipse = 'https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Eclipse.jpg?t=2023-05-09T03%3A13%3A45.793Z'
    const OceanBubbles = 'https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/OceanBubbles?t=2023-05-09T03%3A14%3A30.833Z'
    const Needle = 'https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Smoke?t=2023-05-09T03%3A14%3A17.502Z'
    const Smoke = 'https://daiiuznptrjzvlsexpwp.supabase.co/storage/v1/object/public/images/images/homepage/Needle?t=2023-05-09T03%3A14%3A38.546Z'

    return(
        <div className={Gallery.container}>
            <Head> 
                <title> Gallery </title>
            </Head>
            <div className={Gallery.grid}>
                <div className={Gallery.image}>
                    <Link href="/SeniorExhib">
                        <img src={Eclipse}/>
                    </Link>
                    <p>Senior Exhibition</p>
                </div>
                <div className={Gallery.image}>
                    <Link href="/Nature">
                        <img src={OceanBubbles}/>
                    </Link>
                    <p>Nature</p>
                </div>
                <div className={Gallery.image}>
                    <Link href="/Cityscapes">
                        <img src={Needle}/>
                    </Link>
                    <p>Cityscapes</p>
                </div>
                <div className={Gallery.image}>
                    <Link href="/Nightscapes">
                        <img src={Smoke}/>
                    </Link>
                    <p>Nightscapes</p>
                </div>
            </div>
        </div>
    )
}