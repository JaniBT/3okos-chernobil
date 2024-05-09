import React from 'react';
import { image1, image2, image3, image4, image5 } from '../assets/images/images2';
import { ControlRoom, HeliCrash, Liquidators, OldSarcophage } from '../assets/images/images'

const GalleryImages = () => {

    const listOfImages = [
        {
            id: 0,
            image: image1
        },
        {
            id: 1,
            image: image2
        }, 
        {
            id: 2,
            image: image3
        }, 
        {
            id: 3,
            image: image4
        },
        {
            id: 4,
            image: image5
        }, 
        {
            id: 5,
            image: ControlRoom
        },
        {
            id: 6,
            image: HeliCrash
        }, 
        {
            id: 7,
            image: Liquidators
        },
        {
            id: 8,
            image: OldSarcophage
        }]

    return (
        <>
            {listOfImages.map((image) => 
                <div key={image.id} className='gal-image'>
                    <img src={image.image} alt="Image of Chernobyl" />
                </div>
            )}
        </>
    )
}

export default GalleryImages