import React from 'react';
import pictures from '../paintings-items'
import './PictureSection.css';

const PictureSection = () => {

    let popup = <div className="popup"></div>

    const pictureItems = pictures.map (
        picture => {
            return(
                <div className="picture-box" key={picture.id}>
                    <div className="picture-section" >
                        <img className="picture-section-img" src={picture.img} alt="jedzacy-kebaba" />
                    </div>
                    <h2 className="picture-section-title">{picture.title}</h2>
                </div>
            );
        }
    )

    return(
        <div className="picture-container">
            {popup}
            {pictureItems}
        </div>
    )
}

export default PictureSection;