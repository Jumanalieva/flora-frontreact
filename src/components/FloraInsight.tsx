// src/components/FloraInsight.tsx
import React from 'react';

interface FloraInsightProps {
    text: string;
}

const FloraInsight: React.FC<FloraInsightProps> = ({ text }) => {
    // Split the text into sentences based on common punctuation
    const sentences = text.split(/(?<=[.?!])\s+/);

    return (
        <div className="bg-white py-10 px-20 text-center font-playfair text-black-700">
            
            {sentences.map((sentence, index) => (
                <h5 key={index} className="text-xl py-2">
                    {sentence.trim()}
                </h5>
            ))}
        </div>
    );
};

export default FloraInsight;
