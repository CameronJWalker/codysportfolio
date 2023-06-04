import { React } from 'react';
import Photo from '../styles/Photo.module.css';
import Image from 'next/image';

export default function PhotoGrid(props) {

    return(
            <div className={Photo.container}>
                <img 
                    src={props.imageUrl}
                    className={Photo.box}
                />
            </div>
    )
}