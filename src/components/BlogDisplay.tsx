import React from 'react';
import Typography from '@mui/material/Typography';

// Import each image individually from your local assets
import IntroImage from '/src/assets/media/dark_cinn.jpeg';
import HarvestImage1 from '/src/assets/media/cup.jpeg';
import HarvestImage2 from '/src/assets/media/cinn_harvest.jpeg';
import HarvestImage3 from '/src/assets/media/man&cinn.jpeg';

// Define the structure of the blog data
interface BlogData {
    id: number;
    title: string;
    short_description: string;
    questions: string[];
    answers: string[];
}

interface BlogDisplayProps {
    blogData: BlogData | null;
}

const BlogDisplay: React.FC<BlogDisplayProps> = ({ blogData }) => {
    if (!blogData) {
        return <p>No data found for this blog post.</p>;
    }

    // Define an array of images to display after each Q&A pair
    const images = [HarvestImage1, HarvestImage2, HarvestImage3];

    return (
        <div className="container mx-auto px-4">
            {/* Blog Title */}
            <Typography variant="h4" component="h1" 
            className="text-5xl text-center"
            style={{ fontFamily: '"Playfair Display", serif', marginBottom: "2rem" , fontSize: '2.5rem'}}>
                {blogData.title}
            </Typography>

            {/* Blog Short Description with extra bottom margin */}
            <Typography variant="body1" className="text-lg mb-8 leading-relaxed font-regular">
                {blogData.short_description}
            </Typography>

            {/* Image after Description */}
            <div className="my-6">
                <img
                    src={IntroImage}
                    alt="Introductory image related to the blog"
                    className="w-full h-auto object-cover rounded-lg shadow-sm"
                />
            </div>

            {/* Blog Questions with Corresponding Answers and Images */}
            <div className="space-y-10">
                {blogData.questions.map((question, index) => (
                    <div key={index} className="mb-10">
                        {/* Display question as a header in deep black */}
                        <Typography variant="h6" component="h2" className="font-medium text-xl mb-2 font-playfair text-black">
                            {question}
                        </Typography>
                        
                        {/* Display corresponding answer */}
                        {blogData.answers[index] && (
                            <Typography variant="body1" className="text-lg leading-relaxed font-regular mb-6">
                                {blogData.answers[index]}
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

export default BlogDisplay;
