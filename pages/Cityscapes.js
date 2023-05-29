import React from 'react'
import images from "../images/cityscapes.json"
import GalleryPhoto from "../styles/GalleryPhoto.module.css"

export default function CityScapes() {
  return (
    <div className={GalleryPhoto.container}>
        <div className={GalleryPhoto.grid}>
          {images.map((image, index) => (
            <img src={image.url} key={index} className={GalleryPhoto.box}/>
          ))}
        </div>
      </div>
  )
}

