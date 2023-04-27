import React from 'react';
import Photo from '../styles/Photo.module.css'

export default function PhotoGrid(props) {
    return(
            <div className={Photo.box}>
                <h2>{props.value}</h2>
            </div>
    )
}