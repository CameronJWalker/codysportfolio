import Head from "next/head"
import Gallery from "../styles/Gallery.module.css"

import SeniorExhib from "@/pages/SeniorExhib"
import Nature from "@/pages/Nature"
import City from "@/pages/City"
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
                    <img src={images.Eclipse.url}/>
                    <p>Senior Exhibition</p>
                </div>
                <div className={Gallery.image}>
                    <img src={images.OceanBubbles.url}/>
                    <p>Nature</p>
                </div>
                <div className={Gallery.image}>
                    <img src={images.Needle.url}/>
                    <p>Cityscapes</p>
                </div>
                <div className={Gallery.image}>
                    <img src={images.Smoke.url}/>
                    <p>Nightscapes</p>
                </div>
            </div>
        </div>
    )
}