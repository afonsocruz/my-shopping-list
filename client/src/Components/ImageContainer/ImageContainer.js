import React from 'react';
import Image from '../../assets/images/thomas-le-pRJhn4MbsMM-unsplash.jpg'

export const ImageContainer = () => {

    const imageSizing = {
        width: '550px',
    }

    return(
        <img src={Image} style={imageSizing} alt="Imagem com frutas e legumes"/> 
    )
}