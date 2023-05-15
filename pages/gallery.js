import Head from "next/head"
import Gallery from "../styles/Gallery.module.css"
import Link from "next/link"

import SeniorExhib from "@/pages/SeniorExhib"
import Nature from "@/pages/Nature"
import City from "@/pages/Cityscapes"
import Nightscapes from "@/pages/Nightscapes"

import images from '../images.json'

export default function gallery(){
    return(
        <div className={Gallery.container}>
            <Head> 
                <title> Gallery </title>
            </Head>
            <div className={Gallery.grid}>
                <div className={Gallery.image}>
                    <Link href="/SeniorExhib">
                        <img src={images.Eclipse.url}/>
                    </Link>
                    <p>Senior Exhibition</p>
                </div>
                <div className={Gallery.image}>
                    <Link href="/Nature">
                        <img src={images.OceanBubbles.url}/>
                    </Link>
                    <p>Nature</p>
                </div>
                <div className={Gallery.image}>
                    <Link href="/Cityscapes">
                        <img src={images.Needle.url}/>
                    </Link>
                    <p>Cityscapes</p>
                </div>
                <div className={Gallery.image}>
                    <Link href="/Nightscapes">
                        <img src={images.Smoke.url}/>
                    </Link>
                    <p>Nightscapes</p>
                </div>
            </div>
        </div>
    )
}