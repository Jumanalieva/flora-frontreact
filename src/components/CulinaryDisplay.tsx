import React from 'react';
import Typography from '@mui/material/Typography';

// Import each image individually from your local assets
import HarvestImage1 from '/src/assets/media/sweet_potato.jpeg';
import HarvestImage2 from '/src/assets/media/sweet-po1.jpeg';

// Define the structure of the culinary data
interface CulinaryData {
    id: number;
    title: string;
    short_description: string;
    questions: string[];
    answers: string[];
}

interface CulinaryDisplayProps {
    culinaryData: CulinaryData | null;
}

const CulinaryDisplay: React.FC<CulinaryDisplayProps> = ({ culinaryData }) => {
    if (!culinaryData) {
        return <p className="text-white">No data found for this culinary post.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-40">
            {/* Culinary Title */}
            <Typography variant="h4" component="h1" 
            className="text-4xl text-center mb-8  text-gray-200"
            style={{ fontFamily: '"Playfair Display", serif' , marginBottom: "2rem" , fontSize: '2.5rem'}}>
                {culinaryData.title}
            </Typography>

            {/* Culinary Short Description with Image */}
            <Typography variant="body1" className="text-lg mb-8 leading-relaxed font-regular text-gray-100">
                {culinaryData.short_description}
            </Typography>
            <div className="my-6">
                <img
                    src={HarvestImage1}
                    alt="Image related to the culinary content"
                    className="w-full h-auto object-cover rounded-lg shadow-sm"
                />
            </div>

            {/* Culinary Questions with Corresponding Answers */}
            <div className="space-y-10">
                {culinaryData.questions.map((question, index) => (
                    <div key={index} className="mb-10">
                        {/* Display question */}
                        <Typography variant="h6" component="h2" className="font-medium text-xl mb-2 font-playfair text-gray-100">
                            {question}
                        </Typography>
                        
                        {/* Display corresponding answer */}
                        {culinaryData.answers[index] && (
                            <Typography variant="body1" className="text-lg leading-relaxed font-regular text-gray-100 mb-6">
                                {culinaryData.answers[index]}
                            </Typography>
                        )}

                        {/* Image above the last Q&A pair */}
                        {index === culinaryData.questions.length - 1 && (
                            <div className="my-4">
                                <img
                                    src={HarvestImage2}
                                    alt="Image related to the last Q&A"
                                    className="w-full h-auto object-cover rounded-lg shadow-sm"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CulinaryDisplay;
