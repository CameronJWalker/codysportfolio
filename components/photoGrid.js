import { React } from 'react';
import Photo from '../styles/Photo.module.css'



export default function PhotoGrid(props) {

    return(
            <div>
                <img 
                    src={props.imageUrl}
                    className={Photo.box}
                    alt={props.key}
                    
                />
            </div>
    )
}