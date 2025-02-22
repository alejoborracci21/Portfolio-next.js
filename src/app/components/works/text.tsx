'use client'

import React from 'react';

interface TextsProps {
    text: string;
    name: string;
}

export const Texts: React.FC<TextsProps> = ({ text, name }) => {
    return (
        <div className='flex flex-col items-start justify-center w-[90%] h-[100%] p-5'>
            <h1 className='mb-4 text-2xl font-bold text-white max-md:hidden'>{name}</h1>
            <p className='text-[#898989] text-wrap'>{text}</p>
        </div>
    );
}