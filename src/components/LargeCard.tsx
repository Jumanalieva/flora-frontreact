// src/components/LargeCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface LargeCardProps {
    imageUrl: string;
    title: string;
    link: string;
}

const LargeCard: React.FC<LargeCardProps> = ({ imageUrl, title, link }) => {
    return (
        <div className="relative md:col-span-2 h-full w-full">
            {/* Background Image */}
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
            />
            {/* Centered Title Overlay */}
            <Link to={link} className="absolute inset-0 flex items-center justify-center">
                <h5 className="text-center text-xl md:text-xl lg:text-2xl text-white hover:underline p-6 ">
                    {title}
                </h5>
            </Link>
        </div>
    );
};

export default LargeCard;
