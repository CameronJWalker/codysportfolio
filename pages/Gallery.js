import Head from "next/head"
import GalleryStyles from "../styles/Gallery.module.css"
import Link from "next/link"

export default function Gallery(){
    
    const Eclipse = 'https://codysportfoliobucket.s3.us-west-1.amazonaws.com/homepage/Eclipse.jpg'
    const OceanBubbles = 'https://codysportfoliobucket.s3.us-west-1.amazonaws.com/homepage/OceanBubbles.jpg'
    const FreedomTower = 'https://codysportfoliobucket.s3.us-west-1.amazonaws.com/homepage/FreedomTower.jpg'
    const PineMountain = 'https://codysportfoliobucket.s3.us-west-1.amazonaws.com/homepage/PineMountain.jpg'

    return(
        <div className={GalleryStyles.container}>
            <Head> 
                <title> Gallery </title>
            </Head>
            <div className={GalleryStyles.grid}>
                <div className={GalleryStyles.image}>
                    <Link href="/SeniorExhib">
                        <img src={Eclipse}/>
                    </Link>
                    <p>Senior Exhibition</p>
                </div>
                <div className={GalleryStyles.image}>
                    <Link href="/Naturescapes">
                        <img src={OceanBubbles}/>
                    </Link>
                    <p>Naturescapes</p>
                </div>
                <div className={GalleryStyles.image}>
                    <Link href="/Cityscapes">
                        <img src={FreedomTower}/>
                    </Link>
                    <p>Cityscapes</p>
                </div>
                <div className={GalleryStyles.image}>
                    <Link href="/Nightscapes">
                        <img src={PineMountain}/>
                    </Link>
                    <p>Nightscapes</p>
                </div>
            </div>
        </div>
    )
}