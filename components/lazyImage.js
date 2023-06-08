import React, { useState, useEffect } from 'react';
import Photo from '../styles/Photo.module.css';


const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setImageSrc(src);
    };

    return () => {
      // Cleanup the image object to prevent memory leaks
      image.onload = null;
    };
  }, [src]);

  return <img src={imageSrc} alt={alt} className={Photo.box}/>;
};

export default LazyImage;