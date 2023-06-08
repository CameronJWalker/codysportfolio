import { React } from 'react';
import Photo from '../styles/Photo.module.css';
import LazyImage from './lazyImage';

export default function PhotoGrid(props) {

    return(
            <div className={Photo.container}>
                <LazyImage 
                    src={props.imageUrl}
                />
            </div>
    )
}