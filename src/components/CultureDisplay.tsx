import React from 'react';
import Typography from '@mui/material/Typography';

// Import each image individually from your local assets
import IntroImage from '/src/assets/media/guerlain.jpeg';
import HarvestImage1 from '/src/assets/media/oil-cinn.avif';
import HarvestImage2 from '/src/assets/media/collection.jpg';
import HarvestImage3 from '/src/assets/media/Grasse.jpeg';
// Define the structure of the culture data
interface CultureData {
    id: number;
    title: string;
    short_description: string;
    questions: string[];
    answers: string[];
}

interface CultureDisplayProps {
    cultureData: CultureData | null;
}

const CultureDisplay: React.FC<CultureDisplayProps> = ({ cultureData }) => {
    if (!cultureData) {
        return <p>No data found for this culture post.</p>;
    }

    // Define an array of images to display after each Q&A pair
    const images = [HarvestImage1, HarvestImage2, HarvestImage3];

    return (
        <div className="container mx-auto px-4">
            {/* Culture Title */}
            <Typography variant="h4" component="h1" 
              className="text-4xl text-center mb-10"
              style={{ fontFamily: '"Playfair Display", serif' , marginBottom: "2rem", fontSize: '2.5rem'}}>
                {cultureData.title}
            </Typography>

            {/* Culture Short Description with extra bottom margin */}
            <Typography variant="body1" className="text-lg mb-8 leading-relaxed font-regular">
                {cultureData.short_description}
            </Typography>

            {/* Image after Description */}
            <div className="my-6">
                <img
                    src={IntroImage}
                    alt="Introductory image related to the culture"
                    className="w-full h-auto object-cover rounded-lg shadow-sm"
                />
            </div>

            {/* Culture Questions with Corresponding Answers and Images */}
            <div className="space-y-10">
                {cultureData.questions.map((question, index) => (
                    <div key={index} className="mb-10">
                        {/* Display question as a header in deep black */}
                        <Typography variant="h6" component="h2" className="font-medium text-xl mb-2 font-playfair text-black">
                            {question}
                        </Typography>
                        
                        {/* Display corresponding answer */}
                        {cultureData.answers[index] && (
                            <Typography variant="body1" className="text-lg leading-relaxed font-regular mb-6">
                                {cultureData.answers[index]}
                            </Typography>
                        )}

                        {/* Image below each Q&A pair, using the imported images array */}
                        {images[index] && (
                            <div className="my-4">
                                <img
                                    src={images[index]}
                                    alt={`Image related to Q&A ${index + 1}`}
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

export default CultureDisplay;


