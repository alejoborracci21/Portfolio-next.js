'use client'

import React from 'react';

interface TextsProps {
    text: string;
    name: string;
}

export const Texts: React.FC<TextsProps> = ({ text, name }) => {
    return (
        <div className='flex flex-col items-start justify-center w-[100%] h-[100%] p-5'>
            <h1 className='mb-4 text-2xl font-bold'>{name}</h1>
            <p>{text}</p>
        </div>
    );
}