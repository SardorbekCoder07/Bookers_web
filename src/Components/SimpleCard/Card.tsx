import React from 'react';
import Button from '../Buttons/page';

type CardProps = {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void | any;
};

const Card: React.FC<CardProps> = ({ title, description, buttonText, onButtonClick }) => {
    return (
        <div className="bg-gray-400 p-6 rounded-lg w-full mx-auto shadow-md text-center relative">
            <h2 className="text-xl text-red-800 font-bold mb-4">{title}</h2>
            <p className="text-black mb-6">{description}</p>
            <Button width='60%' title={buttonText}/>
                
        </div>
    );
};

export default Card;
