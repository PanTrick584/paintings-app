import React from 'react';
import pictures from '../paintings-items'
import PictureItem from './PictureItem'
import './PictureSection.css';

const PictureSection = () => {

    let popup = <div className="popup"></div>


    return(
        <div className="picture-container">
            {popup}
            {pictures.map( picture => {
                return <PictureItem key={picture.id} picture={picture} />
            })}
        </div>
    )
}

export default PictureSection;