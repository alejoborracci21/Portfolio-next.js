'use client'

import React from 'react';

export const Texts = ({ text }: { text: string }) => {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full'>
            {text}
        </div>
    );
}