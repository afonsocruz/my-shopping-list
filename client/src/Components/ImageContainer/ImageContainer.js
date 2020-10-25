import React from 'react';
import Image from '../../assets/images/thomas-le-pRJhn4MbsMM-unsplash.jpg'
import { StyledImageContainer } from './ImageContainerStyle';

export const ImageContainer = () => {
    return(
        <StyledImageContainer>
            <div className="image-container">
                <img src={Image} alt=""/>
            </div>
        </StyledImageContainer>
    )
}