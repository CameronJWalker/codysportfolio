import { React, useState, useEffect } from 'react';
import Head from 'next/head' 
import PhotoGrid from '../components/photoGrid'
import Photo from '../styles/Photo.module.css'
import imagesArray from '../images/sqimages.json'

export default function Home() {

return (
  <div className={Photo.container}>
    <Head> 
      <title> Home </title>
    </Head>
    <div className={Photo.grid}>
      {imagesArray.map((image, index) => (
          <PhotoGrid key={index} imageUrl={image.url} alt={image.alt}/>
        ))}
    </div>
  </div>
) 
}
