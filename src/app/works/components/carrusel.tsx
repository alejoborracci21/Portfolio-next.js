'use client'

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

interface ProjectsProps {
    images: Array<string>;
}


export const Projects: React.FC<ProjectsProps> = ({ images }) => {

    if (!images || images.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <div className='flex flex-col w-full h-full justify-center items-center ml-3'>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay interval={5000}>
                {images.map((image, index) => (
                    <div key={index} className='border-2 border-gray-300'>
                        <Image src={image} alt={`Slide ${index}`} width={800} height={600} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}