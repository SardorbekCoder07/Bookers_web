import React from 'react'

type DefTextProps = {
    text: string;
}

export default function DefText({ text }: DefTextProps) {
    return (
        <div className='text-gray-300 mb-10 lg:flex lg:text-md text-base mt-4'>
            {text}
        </div>
    )
}
