// src/components/Card.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    imageUrl: string;
    title: string;
    link: string;
    isMainFeature?: boolean; // Optional prop for main feature styling
}

const Card: React.FC<CardProps> = ({ imageUrl, title, link, isMainFeature = false }) => {
    return (
        <div className={`relative ${isMainFeature ? 'md:col-span-2 h-full' : 'h-full'}`}>
            <img
                src={imageUrl}
                alt={title}
                className={`${isMainFeature ? 'w-full h-full' : 'w-full h-3/4'} object-cover`}
            />
            <Link
                to={link}
                className={`block text-center text-xl mt-2 hover:underline p-4 ${isMainFeature ? 'text-white' : 'bg-white'} h-1/4 flex items-center justify-center`}
            >
                {title}
            </Link>
        </div>
    );
};

export default Card;
