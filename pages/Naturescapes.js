import React from 'react'
import images from "../images/nature.json"
import GalleryPhoto from "../styles/GalleryPhoto.module.css"
import LazyImage from '../components/lazyImage';

export default function Nature() {
  return (
    <div className={GalleryPhoto.container}>
        <div className={GalleryPhoto.grid}>
          {images.map((image, index) => (
            <LazyImage src={image.url} key={index} />
          ))}
        </div>
      </div>
  )
}

