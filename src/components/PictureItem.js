import React from 'react'

export default function PictureItem( { picture }) {

    const { img, title } = picture;

    return (
        <div className="picture-box">
            <div className="picture-section" >
                <img className="picture-section-img" src={ img } alt="jedzacy-kebaba" />
            </div>
            <h2 className="picture-section-title">{ title }</h2>
        </div>
    )
}
